--- 
title: sms_sandbox_phone_numbers
hide_title: false
hide_table_of_contents: false
keywords:
  - sms_sandbox_phone_numbers
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

Creates, updates, deletes, gets or lists a <code>sms_sandbox_phone_numbers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sms_sandbox_phone_numbers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sns.sms_sandbox_phone_numbers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_sms_sandbox_phone_numbers"
    values={[
        { label: 'list_sms_sandbox_phone_numbers', value: 'list_sms_sandbox_phone_numbers' }
    ]}
>
<TabItem value="list_sms_sandbox_phone_numbers">

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
    <td><CopyableCode code="phone_number" /></td>
    <td><code>string</code></td>
    <td>The destination phone number.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The destination phone number's verification status.</td>
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
    <td><a href="#list_sms_sandbox_phone_numbers"><CopyableCode code="list_sms_sandbox_phone_numbers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Lists the calling Amazon Web Services account's current verified and pending destination phone numbers in the SMS sandbox. When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the SMS sandbox. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see SMS sandbox in the Amazon SNS Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_sms_sandbox_phone_number"><CopyableCode code="create_sms_sandbox_phone_number" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-PhoneNumber"><code>PhoneNumber</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LanguageCode"><code>LanguageCode</code></a></td>
    <td>Adds a destination phone number to an Amazon Web Services account in the SMS sandbox and sends a one-time password (OTP) to that phone number. When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the SMS sandbox. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see SMS sandbox in the Amazon SNS Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_sms_sandbox_phone_number"><CopyableCode code="delete_sms_sandbox_phone_number" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-PhoneNumber"><code>PhoneNumber</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Web Services account's verified or pending phone number from the SMS sandbox. When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the SMS sandbox. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see SMS sandbox in the Amazon SNS Developer Guide.</td>
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
<tr id="parameter-PhoneNumber">
    <td><CopyableCode code="PhoneNumber" /></td>
    <td><code>string</code></td>
    <td>The destination phone number to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-LanguageCode">
    <td><CopyableCode code="LanguageCode" /></td>
    <td><code>string</code></td>
    <td>The language to use for sending the OTP. The default value is en-US.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of phone numbers to return.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Token that the previous ListSMSSandboxPhoneNumbersInput request returns.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_sms_sandbox_phone_numbers"
    values={[
        { label: 'list_sms_sandbox_phone_numbers', value: 'list_sms_sandbox_phone_numbers' }
    ]}
>
<TabItem value="list_sms_sandbox_phone_numbers">

Lists the calling Amazon Web Services account's current verified and pending destination phone numbers in the SMS sandbox. When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the SMS sandbox. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see SMS sandbox in the Amazon SNS Developer Guide.

```sql
SELECT
phone_number,
status
FROM aws.sns.sms_sandbox_phone_numbers
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sms_sandbox_phone_number"
    values={[
        { label: 'create_sms_sandbox_phone_number', value: 'create_sms_sandbox_phone_number' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sms_sandbox_phone_number">

Adds a destination phone number to an Amazon Web Services account in the SMS sandbox and sends a one-time password (OTP) to that phone number. When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the SMS sandbox. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see SMS sandbox in the Amazon SNS Developer Guide.

```sql
INSERT INTO aws.sns.sms_sandbox_phone_numbers (
PhoneNumber,
region,
LanguageCode
)
SELECT 
'{{ PhoneNumber }}',
'{{ region }}',
'{{ LanguageCode }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sms_sandbox_phone_numbers
  props:
    - name: PhoneNumber
      value: "{{ PhoneNumber }}"
      description: Required parameter for the sms_sandbox_phone_numbers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sms_sandbox_phone_numbers resource.
    - name: LanguageCode
      value: "{{ LanguageCode }}"
      description: The language to use for sending the OTP. The default value is en-US.
      description: The language to use for sending the OTP. The default value is en-US.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sms_sandbox_phone_number"
    values={[
        { label: 'delete_sms_sandbox_phone_number', value: 'delete_sms_sandbox_phone_number' }
    ]}
>
<TabItem value="delete_sms_sandbox_phone_number">

Deletes an Amazon Web Services account's verified or pending phone number from the SMS sandbox. When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the SMS sandbox. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see SMS sandbox in the Amazon SNS Developer Guide.

```sql
DELETE FROM aws.sns.sms_sandbox_phone_numbers
WHERE PhoneNumber = '{{ PhoneNumber }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
