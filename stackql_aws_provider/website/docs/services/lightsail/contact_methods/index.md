--- 
title: contact_methods
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_methods
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>contact_methods</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contact_methods" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.contact_methods" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_contact_methods"
    values={[
        { label: 'get_contact_methods', value: 'get_contact_methods' }
    ]}
>
<TabItem value="get_contact_methods">

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
    <td><CopyableCode code="contact_methods" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describe the contact methods.</td>
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
    <td><a href="#get_contact_methods"><CopyableCode code="get_contact_methods" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the configured contact methods. Specify a protocol in your request to return information about a specific contact method. A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see Notifications in Amazon Lightsail.</td>
</tr>
<tr>
    <td><a href="#create_contact_method"><CopyableCode code="create_contact_method" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-protocol"><code>protocol</code></a>, <a href="#parameter-contactEndpoint"><code>contactEndpoint</code></a></td>
    <td></td>
    <td>Creates an email or SMS text message contact method. A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see Notifications in Amazon Lightsail. The create contact method operation supports tag-based access control via request tags. For more information, see the Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_contact_method"><CopyableCode code="delete_contact_method" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a contact method. A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see Notifications in Amazon Lightsail.</td>
</tr>
<tr>
    <td><a href="#send_contact_method_verification"><CopyableCode code="send_contact_method_verification" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-protocol"><code>protocol</code></a></td>
    <td></td>
    <td>Sends a verification request to an email contact method to ensure it's owned by the requester. SMS contact methods don't need to be verified. A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see Notifications in Amazon Lightsail. A verification request is sent to the contact method when you initially create it. Use this action to send another verification request if a previous verification request was deleted, or has expired. Notifications are not sent to an email contact method until after it is verified, and confirmed as valid.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_contact_methods"
    values={[
        { label: 'get_contact_methods', value: 'get_contact_methods' }
    ]}
>
<TabItem value="get_contact_methods">

Returns information about the configured contact methods. Specify a protocol in your request to return information about a specific contact method. A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see Notifications in Amazon Lightsail.

```sql
SELECT
contact_methods
FROM aws.lightsail.contact_methods
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_contact_method"
    values={[
        { label: 'create_contact_method', value: 'create_contact_method' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_contact_method">

Creates an email or SMS text message contact method. A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see Notifications in Amazon Lightsail. The create contact method operation supports tag-based access control via request tags. For more information, see the Lightsail Developer Guide.

```sql
INSERT INTO aws.lightsail.contact_methods (
protocol,
contactEndpoint,
tags,
region
)
SELECT 
'{{ protocol }}' /* required */,
'{{ contactEndpoint }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
operations
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: contact_methods
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the contact_methods resource.
    - name: protocol
      value: "{{ protocol }}"
      description: |
        The protocol of the contact method, such as Email or SMS (text messaging). The SMS protocol is supported only in the following Amazon Web Services Regions. US East (N. Virginia) (us-east-1) US West (Oregon) (us-west-2) Europe (Ireland) (eu-west-1) Asia Pacific (Tokyo) (ap-northeast-1) Asia Pacific (Singapore) (ap-southeast-1) Asia Pacific (Sydney) (ap-southeast-2) For a list of countries/regions where SMS text messages can be sent, and the latest Amazon Web Services Regions where SMS text messaging is supported, see Supported Regions and Countries in the Amazon SNS Developer Guide. For more information about notifications in Amazon Lightsail, see Notifications in Amazon Lightsail.
      valid_values: ['Email', 'SMS']
    - name: contactEndpoint
      value: "{{ contactEndpoint }}"
      description: |
        The destination of the contact method, such as an email address or a mobile phone number. Use the E.164 format when specifying a mobile phone number. E.164 is a standard for the phone number structure used for international telecommunication. Phone numbers that follow this format can have a maximum of 15 digits, and they are prefixed with the plus character (+) and the country code. For example, a U.S. phone number in E.164 format would be specified as +1XXX5550100. For more information, see E.164 on Wikipedia.
    - name: tags
      description: |
        The tag keys and optional values to add to the contact method during create. Use the TagResource action to tag a resource after it's created.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_contact_method"
    values={[
        { label: 'delete_contact_method', value: 'delete_contact_method' }
    ]}
>
<TabItem value="delete_contact_method">

Deletes a contact method. A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see Notifications in Amazon Lightsail.

```sql
DELETE FROM aws.lightsail.contact_methods
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="send_contact_method_verification"
    values={[
        { label: 'send_contact_method_verification', value: 'send_contact_method_verification' }
    ]}
>
<TabItem value="send_contact_method_verification">

Sends a verification request to an email contact method to ensure it's owned by the requester. SMS contact methods don't need to be verified. A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see Notifications in Amazon Lightsail. A verification request is sent to the contact method when you initially create it. Use this action to send another verification request if a previous verification request was deleted, or has expired. Notifications are not sent to an email contact method until after it is verified, and confirmed as valid.

```sql
EXEC aws.lightsail.contact_methods.send_contact_method_verification 
@region='{{ region }}' --required 
@@json=
'{
"protocol": "{{ protocol }}"
}'
;
```
</TabItem>
</Tabs>
