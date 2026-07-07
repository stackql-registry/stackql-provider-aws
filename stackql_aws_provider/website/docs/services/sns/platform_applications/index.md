--- 
title: platform_applications
hide_title: false
hide_table_of_contents: false
keywords:
  - platform_applications
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

Creates, updates, deletes, gets or lists a <code>platform_applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="platform_applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sns.platform_applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_platform_applications"
    values={[
        { label: 'list_platform_applications', value: 'list_platform_applications' }
    ]}
>
<TabItem value="list_platform_applications">

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
    <td>Attributes for platform application object.</td>
</tr>
<tr>
    <td><CopyableCode code="PlatformApplicationArn" /></td>
    <td><code>string</code></td>
    <td>PlatformApplicationArn for platform application object.</td>
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
    <td><a href="#list_platform_applications"><CopyableCode code="list_platform_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists the platform application objects for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). The results for ListPlatformApplications are paginated and return a limited list of applications, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call ListPlatformApplications using the NextToken string received from the previous call. When there are no more records to return, NextToken will be null. For more information, see Using Amazon SNS Mobile Push Notifications. This action is throttled at 15 transactions per second (TPS).</td>
</tr>
<tr>
    <td><a href="#create_platform_application"><CopyableCode code="create_platform_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Platform"><code>Platform</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Attributes"><code>Attributes</code></a></td>
    <td>Creates a platform application object for one of the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging), to which devices and mobile apps may register. You must specify PlatformPrincipal and PlatformCredential attributes when using the CreatePlatformApplication action. PlatformPrincipal and PlatformCredential are received from the notification service. For ADM, PlatformPrincipal is client id and PlatformCredential is client secret. For APNS and APNS_SANDBOX using certificate credentials, PlatformPrincipal is SSL certificate and PlatformCredential is private key. For APNS and APNS_SANDBOX using token credentials, PlatformPrincipal is signing key ID and PlatformCredential is signing key. For Baidu, PlatformPrincipal is API key and PlatformCredential is secret key. For GCM (Firebase Cloud Messaging) using key credentials, there is no PlatformPrincipal. The PlatformCredential is API key. For GCM (Firebase Cloud Messaging) using token credentials, there is no PlatformPrincipal. The PlatformCredential is a JSON formatted private key file. When using the Amazon Web Services CLI or Amazon Web Services SDKs, the file must be in string format and special characters must be ignored. To format the file correctly, Amazon SNS recommends using the following command: SERVICE_JSON=$(jq @json &lt; service.json). For MPNS, PlatformPrincipal is TLS certificate and PlatformCredential is private key. For WNS, PlatformPrincipal is Package Security Identifier and PlatformCredential is secret key. You can use the returned PlatformApplicationArn as an attribute for the CreatePlatformEndpoint action.</td>
</tr>
<tr>
    <td><a href="#create_platform_endpoint"><CopyableCode code="create_platform_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-PlatformApplicationArn"><code>PlatformApplicationArn</code></a>, <a href="#parameter-Token"><code>Token</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CustomUserData"><code>CustomUserData</code></a>, <a href="#parameter-Attributes"><code>Attributes</code></a></td>
    <td>Creates an endpoint for a device and mobile app on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. CreatePlatformEndpoint requires the PlatformApplicationArn that is returned from CreatePlatformApplication. You can use the returned EndpointArn to send a message to a mobile app or by the Subscribe action for subscription to a topic. The CreatePlatformEndpoint action is idempotent, so if the requester already owns an endpoint with the same device token and attributes, that endpoint's ARN is returned without creating a new endpoint. For more information, see Using Amazon SNS Mobile Push Notifications. When using CreatePlatformEndpoint with Baidu, two attributes must be provided: ChannelId and UserId. The token field must also contain the ChannelId. For more information, see Creating an Amazon SNS Endpoint for Baidu.</td>
</tr>
<tr>
    <td><a href="#delete_platform_application"><CopyableCode code="delete_platform_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-PlatformApplicationArn"><code>PlatformApplicationArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a platform application object for one of the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see Using Amazon SNS Mobile Push Notifications.</td>
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
<tr id="parameter-Name">
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Application names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, hyphens, and periods, and must be between 1 and 256 characters long.</td>
</tr>
<tr id="parameter-Platform">
    <td><CopyableCode code="Platform" /></td>
    <td><code>string</code></td>
    <td>The following platforms are supported: ADM (Amazon Device Messaging), APNS (Apple Push Notification Service), APNS_SANDBOX, and GCM (Firebase Cloud Messaging).</td>
</tr>
<tr id="parameter-PlatformApplicationArn">
    <td><CopyableCode code="PlatformApplicationArn" /></td>
    <td><code>string</code></td>
    <td>PlatformApplicationArn of platform application object to delete.</td>
</tr>
<tr id="parameter-Token">
    <td><CopyableCode code="Token" /></td>
    <td><code>string</code></td>
    <td>Unique identifier created by the notification service for an app on a device. The specific name for Token will vary, depending on which notification service is being used. For example, when using APNS as the notification service, you need the device token. Alternatively, when using GCM (Firebase Cloud Messaging) or ADM, the device token equivalent is called the registration ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Attributes">
    <td><CopyableCode code="Attributes" /></td>
    <td><code>object</code></td>
    <td>For a list of attributes, see SetEndpointAttributes .</td>
</tr>
<tr id="parameter-CustomUserData">
    <td><CopyableCode code="CustomUserData" /></td>
    <td><code>string</code></td>
    <td>Arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>NextToken string is used when calling ListPlatformApplications action to retrieve additional records that are available after the first page results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_platform_applications"
    values={[
        { label: 'list_platform_applications', value: 'list_platform_applications' }
    ]}
>
<TabItem value="list_platform_applications">

Lists the platform application objects for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). The results for ListPlatformApplications are paginated and return a limited list of applications, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call ListPlatformApplications using the NextToken string received from the previous call. When there are no more records to return, NextToken will be null. For more information, see Using Amazon SNS Mobile Push Notifications. This action is throttled at 15 transactions per second (TPS).

```sql
SELECT
Attributes,
PlatformApplicationArn
FROM aws.sns.platform_applications
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_platform_application"
    values={[
        { label: 'create_platform_application', value: 'create_platform_application' },
        { label: 'create_platform_endpoint', value: 'create_platform_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_platform_application">

Creates a platform application object for one of the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging), to which devices and mobile apps may register. You must specify PlatformPrincipal and PlatformCredential attributes when using the CreatePlatformApplication action. PlatformPrincipal and PlatformCredential are received from the notification service. For ADM, PlatformPrincipal is client id and PlatformCredential is client secret. For APNS and APNS_SANDBOX using certificate credentials, PlatformPrincipal is SSL certificate and PlatformCredential is private key. For APNS and APNS_SANDBOX using token credentials, PlatformPrincipal is signing key ID and PlatformCredential is signing key. For Baidu, PlatformPrincipal is API key and PlatformCredential is secret key. For GCM (Firebase Cloud Messaging) using key credentials, there is no PlatformPrincipal. The PlatformCredential is API key. For GCM (Firebase Cloud Messaging) using token credentials, there is no PlatformPrincipal. The PlatformCredential is a JSON formatted private key file. When using the Amazon Web Services CLI or Amazon Web Services SDKs, the file must be in string format and special characters must be ignored. To format the file correctly, Amazon SNS recommends using the following command: SERVICE_JSON=$(jq @json &lt; service.json). For MPNS, PlatformPrincipal is TLS certificate and PlatformCredential is private key. For WNS, PlatformPrincipal is Package Security Identifier and PlatformCredential is secret key. You can use the returned PlatformApplicationArn as an attribute for the CreatePlatformEndpoint action.

```sql
INSERT INTO aws.sns.platform_applications (
Name,
Platform,
region,
Attributes
)
SELECT 
'{{ Name }}',
'{{ Platform }}',
'{{ region }}',
'{{ Attributes }}'
RETURNING
PlatformApplicationArn
;
```
</TabItem>
<TabItem value="create_platform_endpoint">

Creates an endpoint for a device and mobile app on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. CreatePlatformEndpoint requires the PlatformApplicationArn that is returned from CreatePlatformApplication. You can use the returned EndpointArn to send a message to a mobile app or by the Subscribe action for subscription to a topic. The CreatePlatformEndpoint action is idempotent, so if the requester already owns an endpoint with the same device token and attributes, that endpoint's ARN is returned without creating a new endpoint. For more information, see Using Amazon SNS Mobile Push Notifications. When using CreatePlatformEndpoint with Baidu, two attributes must be provided: ChannelId and UserId. The token field must also contain the ChannelId. For more information, see Creating an Amazon SNS Endpoint for Baidu.

```sql
INSERT INTO aws.sns.platform_applications (
PlatformApplicationArn,
Token,
region,
CustomUserData,
Attributes
)
SELECT 
'{{ PlatformApplicationArn }}',
'{{ Token }}',
'{{ region }}',
'{{ CustomUserData }}',
'{{ Attributes }}'
RETURNING
EndpointArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: platform_applications
  props:
    - name: Name
      value: "{{ Name }}"
      description: Required parameter for the platform_applications resource.
    - name: Platform
      value: "{{ Platform }}"
      description: Required parameter for the platform_applications resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the platform_applications resource.
    - name: PlatformApplicationArn
      value: "{{ PlatformApplicationArn }}"
      description: Required parameter for the platform_applications resource.
    - name: Token
      value: "{{ Token }}"
      description: Required parameter for the platform_applications resource.
    - name: Attributes
      value: "{{ Attributes }}"
      description: For a list of attributes, see SetPlatformApplicationAttributes .
      description: For a list of attributes, see SetPlatformApplicationAttributes .
    - name: CustomUserData
      value: "{{ CustomUserData }}"
      description: Arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.
      description: Arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_platform_application"
    values={[
        { label: 'delete_platform_application', value: 'delete_platform_application' }
    ]}
>
<TabItem value="delete_platform_application">

Deletes a platform application object for one of the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see Using Amazon SNS Mobile Push Notifications.

```sql
DELETE FROM aws.sns.platform_applications
WHERE PlatformApplicationArn = '{{ PlatformApplicationArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
