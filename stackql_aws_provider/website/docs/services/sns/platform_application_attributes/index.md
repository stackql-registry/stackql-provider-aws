--- 
title: platform_application_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - platform_application_attributes
  - sns
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>platform_application_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="platform_application_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sns.platform_application_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_platform_application_attributes"
    values={[
        { label: 'get_platform_application_attributes', value: 'get_platform_application_attributes' }
    ]}
>
<TabItem value="get_platform_application_attributes">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="Attributes" /></td>
    <td><code>string</code></td>
    <td>Attributes include the following: AppleCertificateExpiryDate – The expiry date of the SSL certificate used to configure certificate-based authentication. ApplePlatformTeamID – The Apple developer account ID used to configure token-based authentication. ApplePlatformBundleID – The app identifier used to configure token-based authentication. AuthenticationMethod – Returns the credential type used when sending push notifications from application to APNS/APNS_Sandbox, or application to GCM. APNS – Returns the token or certificate. GCM – Returns the token or key. EventEndpointCreated – Topic ARN to which EndpointCreated event notifications should be sent. EventEndpointDeleted – Topic ARN to which EndpointDeleted event notifications should be sent. EventEndpointUpdated – Topic ARN to which EndpointUpdate event notifications should be sent. EventDeliveryFailure – Topic ARN to which DeliveryFailure event notifications should be sent upon Direct Publish delivery failure (permanent) to one of the application's endpoints.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_platform_application_attributes"><CopyableCode code="get_platform_application_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-PlatformApplicationArn"><code>PlatformApplicationArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the attributes of the platform application object for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see Using Amazon SNS Mobile Push Notifications.</td>
</tr>
<tr>
    <td><a href="#set_platform_application_attributes"><CopyableCode code="set_platform_application_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-PlatformApplicationArn"><code>PlatformApplicationArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Attributes"><code>Attributes</code></a></td>
    <td>Sets the attributes of the platform application object for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see Using Amazon SNS Mobile Push Notifications. For information on configuring attributes for message delivery status, see Using Amazon SNS Application Attributes for Message Delivery Status.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-PlatformApplicationArn">
    <td><CopyableCode code="PlatformApplicationArn" /></td>
    <td><code>string</code></td>
    <td>PlatformApplicationArn for SetPlatformApplicationAttributes action.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Attributes">
    <td><CopyableCode code="Attributes" /></td>
    <td><code>object</code></td>
    <td>A map of the platform application attributes. Attributes in this map include the following: PlatformCredential – The credential received from the notification service. For ADM, PlatformCredentialis client secret. For Apple Services using certificate credentials, PlatformCredential is private key. For Apple Services using token credentials, PlatformCredential is signing key. For GCM (Firebase Cloud Messaging) using key credentials, there is no PlatformPrincipal. The PlatformCredential is API key. For GCM (Firebase Cloud Messaging) using token credentials, there is no PlatformPrincipal. The PlatformCredential is a JSON formatted private key file. When using the Amazon Web Services CLI, the file must be in string format and special characters must be ignored. To format the file correctly, Amazon SNS recommends using the following command: SERVICE_JSON=`jq @json &lt;&lt;&lt; cat service.json`. PlatformPrincipal – The principal received from the notification service. For ADM, PlatformPrincipalis client id. For Apple Services using certificate credentials, PlatformPrincipal is SSL certificate. For Apple Services using token credentials, PlatformPrincipal is signing key ID. For GCM (Firebase Cloud Messaging), there is no PlatformPrincipal. EventEndpointCreated – Topic ARN to which EndpointCreated event notifications are sent. EventEndpointDeleted – Topic ARN to which EndpointDeleted event notifications are sent. EventEndpointUpdated – Topic ARN to which EndpointUpdate event notifications are sent. EventDeliveryFailure – Topic ARN to which DeliveryFailure event notifications are sent upon Direct Publish delivery failure (permanent) to one of the application's endpoints. SuccessFeedbackRoleArn – IAM role ARN used to give Amazon SNS write access to use CloudWatch Logs on your behalf. FailureFeedbackRoleArn – IAM role ARN used to give Amazon SNS write access to use CloudWatch Logs on your behalf. SuccessFeedbackSampleRate – Sample rate percentage (0-100) of successfully delivered messages. The following attributes only apply to APNs token-based authentication: ApplePlatformTeamID – The identifier that's assigned to your Apple developer account team. ApplePlatformBundleID – The bundle identifier that's assigned to your iOS app.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_platform_application_attributes"
    values={[
        { label: 'get_platform_application_attributes', value: 'get_platform_application_attributes' }
    ]}
>
<TabItem value="get_platform_application_attributes">

Retrieves the attributes of the platform application object for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see Using Amazon SNS Mobile Push Notifications.

```sql
SELECT
Attributes
FROM aws.sns.platform_application_attributes
WHERE PlatformApplicationArn = '{{ PlatformApplicationArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_platform_application_attributes"
    values={[
        { label: 'set_platform_application_attributes', value: 'set_platform_application_attributes' }
    ]}
>
<TabItem value="set_platform_application_attributes">

Sets the attributes of the platform application object for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see Using Amazon SNS Mobile Push Notifications. For information on configuring attributes for message delivery status, see Using Amazon SNS Application Attributes for Message Delivery Status.

```sql
UPDATE aws.sns.platform_application_attributes
SET 
-- No updatable properties
WHERE 
PlatformApplicationArn = '{{ PlatformApplicationArn }}' --required
AND region = '{{ region }}' --required
AND Attributes = '{{ Attributes}}';
```
</TabItem>
</Tabs>
