# importing required libraries
from keras.models import load_model
import cv2
import numpy as np
# from google.colab.patches import cv2_imshow


# Load Model
model = load_model(r"C:\Users\mohit.ingavale\Downloads\acne_kNew.h5",compile=False)


# Image Resizing 
def resize_image(img, size=(256,256)):

    h, w = img.shape[:2]
    c = img.shape[2] if len(img.shape)>2 else 1

    if h == w: 
        return cv2.resize(img, size, cv2.INTER_AREA)

    dif = h if h > w else w

    interpolation = cv2.INTER_AREA if dif > (size[0]+size[1])//2 else cv2.INTER_CUBIC

    x_pos = (dif - w)//2
    y_pos = (dif - h)//2

    if len(img.shape) == 2:
        mask = np.zeros((dif, dif), dtype=img.dtype)
        mask[y_pos:y_pos+h, x_pos:x_pos+w] = img[:h, :w]
    else:
        mask = np.zeros((dif, dif, c), dtype=img.dtype)
        mask[y_pos:y_pos+h, x_pos:x_pos+w, :] = img[:h, :w, :]

    return cv2.resize(mask, size, interpolation)

    #Model Prediction


def overlay(img):
  img1 = cv2.imread(img,cv2.IMREAD_GRAYSCALE)
  h,w = img1.shape
  img = resize_image(img1)
  img = img /255.0

  threshold = 0.4

  test_img_input=np.expand_dims(img, 2)
  test_img_input=np.expand_dims(test_img_input, 0)
  prediction = (model.predict(test_img_input)[0,:,:,0] > threshold).astype(np.uint8)
  prediction = prediction*255

  prediction = cv2.resize(prediction,(w,h))
  overlay = cv2.addWeighted(img1, 0.7, prediction, 0.3, 1.0)
 
  # return cv2_imshow(overlay) # for google colab only
  return cv2.imshow(overlay) # regular uses
  cv2.waitKey(0)
  cv2.destroyAllWindows()


if __name__ == '__main__':
    overlay(r"D:\task-367_6.jpg")