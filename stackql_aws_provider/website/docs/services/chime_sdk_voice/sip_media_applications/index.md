--- 
title: sip_media_applications
hide_title: false
hide_table_of_contents: false
keywords:
  - sip_media_applications
  - chime_sdk_voice
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

Creates, updates, deletes, gets or lists a <code>sip_media_applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sip_media_applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_voice.sip_media_applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sip_media_application"
    values={[
        { label: 'get_sip_media_application', value: 'get_sip_media_application' },
        { label: 'list_sip_media_applications', value: 'list_sip_media_applications' }
    ]}
>
<TabItem value="get_sip_media_application">

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
    <td><CopyableCode code="aws_region" /></td>
    <td><code>string</code></td>
    <td>The AWS Region in which the SIP media application is created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The SIP media application creation timestamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>array</code></td>
    <td>List of endpoints for a SIP media application. Currently, only one endpoint per SIP media application is permitted.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The SIP media application's name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9 _.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sip_media_application_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the SIP media application. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sip_media_application_id" /></td>
    <td><code>string</code></td>
    <td>A SIP media application's ID. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the SIP media application was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sip_media_applications">

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
    <td><CopyableCode code="aws_region" /></td>
    <td><code>string</code></td>
    <td>The AWS Region in which the SIP media application is created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The SIP media application creation timestamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>array</code></td>
    <td>List of endpoints for a SIP media application. Currently, only one endpoint per SIP media application is permitted.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The SIP media application's name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9 _.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sip_media_application_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the SIP media application. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sip_media_application_id" /></td>
    <td><code>string</code></td>
    <td>A SIP media application's ID. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the SIP media application was updated.</td>
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
    <td><a href="#get_sip_media_application"><CopyableCode code="get_sip_media_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-sip_media_application_id"><code>sip_media_application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the information for a SIP media application, including name, AWS Region, and endpoints.</td>
</tr>
<tr>
    <td><a href="#list_sip_media_applications"><CopyableCode code="list_sip_media_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists the SIP media applications under the administrator's AWS account.</td>
</tr>
<tr>
    <td><a href="#create_sip_media_application_call"><CopyableCode code="create_sip_media_application_call" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-sip_media_application_id"><code>sip_media_application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FromPhoneNumber"><code>FromPhoneNumber</code></a>, <a href="#parameter-ToPhoneNumber"><code>ToPhoneNumber</code></a></td>
    <td></td>
    <td>Creates an outbound call to a phone number from the phone number specified in the request, and it invokes the endpoint of the specified sipMediaApplicationId.</td>
</tr>
<tr>
    <td><a href="#create_sip_media_application"><CopyableCode code="create_sip_media_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AwsRegion"><code>AwsRegion</code></a></td>
    <td></td>
    <td>Creates a SIP media application. For more information about SIP media applications, see Managing SIP media applications and rules in the Amazon Chime SDK Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#update_sip_media_application_call"><CopyableCode code="update_sip_media_application_call" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-sip_media_application_id"><code>sip_media_application_id</code></a>, <a href="#parameter-transaction_id"><code>transaction_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Arguments"><code>Arguments</code></a></td>
    <td></td>
    <td>Invokes the AWS Lambda function associated with the SIP media application and transaction ID in an update request. The Lambda function can then return a new set of actions.</td>
</tr>
<tr>
    <td><a href="#update_sip_media_application"><CopyableCode code="update_sip_media_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-sip_media_application_id"><code>sip_media_application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the details of the specified SIP media application.</td>
</tr>
<tr>
    <td><a href="#delete_sip_media_application"><CopyableCode code="delete_sip_media_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-sip_media_application_id"><code>sip_media_application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a SIP media application.</td>
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
<tr id="parameter-sip_media_application_id">
    <td><CopyableCode code="sip_media_application_id" /></td>
    <td><code>string</code></td>
    <td>The SIP media application ID.</td>
</tr>
<tr id="parameter-transaction_id">
    <td><CopyableCode code="transaction_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the call transaction.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. Defaults to 100.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token used to return the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sip_media_application"
    values={[
        { label: 'get_sip_media_application', value: 'get_sip_media_application' },
        { label: 'list_sip_media_applications', value: 'list_sip_media_applications' }
    ]}
>
<TabItem value="get_sip_media_application">

Retrieves the information for a SIP media application, including name, AWS Region, and endpoints.

```sql
SELECT
aws_region,
created_timestamp,
endpoints,
name,
sip_media_application_arn,
sip_media_application_id,
updated_timestamp
FROM aws.chime_sdk_voice.sip_media_applications
WHERE sip_media_application_id = '{{ sip_media_application_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sip_media_applications">

Lists the SIP media applications under the administrator's AWS account.

```sql
SELECT
aws_region,
created_timestamp,
endpoints,
name,
sip_media_application_arn,
sip_media_application_id,
updated_timestamp
FROM aws.chime_sdk_voice.sip_media_applications
WHERE region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sip_media_application_call"
    values={[
        { label: 'create_sip_media_application_call', value: 'create_sip_media_application_call' },
        { label: 'create_sip_media_application', value: 'create_sip_media_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sip_media_application_call">

Creates an outbound call to a phone number from the phone number specified in the request, and it invokes the endpoint of the specified sipMediaApplicationId.

```sql
INSERT INTO aws.chime_sdk_voice.sip_media_applications (
FromPhoneNumber,
ToPhoneNumber,
SipHeaders,
ArgumentsMap,
sip_media_application_id,
region
)
SELECT 
'{{ FromPhoneNumber }}' /* required */,
'{{ ToPhoneNumber }}' /* required */,
'{{ SipHeaders }}',
'{{ ArgumentsMap }}',
'{{ sip_media_application_id }}',
'{{ region }}'
RETURNING
sip_media_application_call
;
```
</TabItem>
<TabItem value="create_sip_media_application">

Creates a SIP media application. For more information about SIP media applications, see Managing SIP media applications and rules in the Amazon Chime SDK Administrator Guide.

```sql
INSERT INTO aws.chime_sdk_voice.sip_media_applications (
AwsRegion,
Name,
Endpoints,
Tags,
region
)
SELECT 
'{{ AwsRegion }}' /* required */,
'{{ Name }}',
'{{ Endpoints }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
sip_media_application
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sip_media_applications
  props:
    - name: sip_media_application_id
      value: "{{ sip_media_application_id }}"
      description: Required parameter for the sip_media_applications resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sip_media_applications resource.
    - name: FromPhoneNumber
      value: "{{ FromPhoneNumber }}"
    - name: ToPhoneNumber
      value: "{{ ToPhoneNumber }}"
    - name: SipHeaders
      value: "{{ SipHeaders }}"
    - name: ArgumentsMap
      value: "{{ ArgumentsMap }}"
    - name: AwsRegion
      value: "{{ AwsRegion }}"
    - name: Name
      value: "{{ Name }}"
    - name: Endpoints
      value:
        - LambdaArn: "{{ LambdaArn }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_sip_media_application_call"
    values={[
        { label: 'update_sip_media_application_call', value: 'update_sip_media_application_call' },
        { label: 'update_sip_media_application', value: 'update_sip_media_application' }
    ]}
>
<TabItem value="update_sip_media_application_call">

Invokes the AWS Lambda function associated with the SIP media application and transaction ID in an update request. The Lambda function can then return a new set of actions.

```sql
UPDATE aws.chime_sdk_voice.sip_media_applications
SET 
Arguments = '{{ Arguments }}'
WHERE 
sip_media_application_id = '{{ sip_media_application_id }}' --required
AND transaction_id = '{{ transaction_id }}' --required
AND region = '{{ region }}' --required
AND Arguments = '{{ Arguments }}' --required
RETURNING
sip_media_application_call;
```
</TabItem>
<TabItem value="update_sip_media_application">

Updates the details of the specified SIP media application.

```sql
UPDATE aws.chime_sdk_voice.sip_media_applications
SET 
Name = '{{ Name }}',
Endpoints = '{{ Endpoints }}'
WHERE 
sip_media_application_id = '{{ sip_media_application_id }}' --required
AND region = '{{ region }}' --required
RETURNING
sip_media_application;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sip_media_application"
    values={[
        { label: 'delete_sip_media_application', value: 'delete_sip_media_application' }
    ]}
>
<TabItem value="delete_sip_media_application">

Deletes a SIP media application.

```sql
DELETE FROM aws.chime_sdk_voice.sip_media_applications
WHERE sip_media_application_id = '{{ sip_media_application_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
