--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - supplychain
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.supplychain.instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_instance"
    values={[
        { label: 'get_instance', value: 'get_instance' },
        { label: 'list_instances', value: 'list_instances' }
    ]}
>
<TabItem value="get_instance">

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
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the instance. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The instance creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Supply Chain instance error message. If the instance results in an unhealthy state, customers need to check the error message, delete the current instance, and recreate a new one based on the mitigation from the error message.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_description" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Supply Chain instance description. (pattern: &lt;code&gt;(&#91;a-zA-Z0-9., _ʼ'%-&#93;)&#123;0,500&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Supply Chain instance identifier. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_name" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Supply Chain instance name. (pattern: &lt;code&gt;(?!&#91; _ʼ'%-&#93;)&#91;a-zA-Z0-9 _ʼ'%-&#93;&#123;0,62&#125;&#91;a-zA-Z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you optionally provided for encryption. If you did not provide anything here, AWS Supply Chain uses the Amazon Web Services owned KMS key and nothing is returned. (pattern: &lt;code&gt;arn:&#91;a-z0-9&#93;&#91;-.a-z0-9&#93;&#123;0,62&#125;:kms:(&#91;a-z0-9&#93;&#91;-.a-z0-9&#93;&#123;0,62&#125;)?:(&#91;a-z0-9&#93;&#91;-.a-z0-9&#93;&#123;0,62&#125;)?:key/.&#123;0,1019&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The instance last modified timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the instance. (Initializing, Active, CreateFailed, DeleteFailed, Deleting, Deleted)</td>
</tr>
<tr>
    <td><CopyableCode code="version_number" /></td>
    <td><code>number (double)</code></td>
    <td>The version number of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="web_app_dns_domain" /></td>
    <td><code>string</code></td>
    <td>The WebApp DNS domain name of the instance. (pattern: &lt;code&gt;(?!&#91;-&#93;)&#91;a-zA-Z0-9-&#93;&#123;1,62&#125;&#91;a-zA-Z0-9&#93;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_instances">

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
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the instance. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The instance creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Supply Chain instance error message. If the instance results in an unhealthy state, customers need to check the error message, delete the current instance, and recreate a new one based on the mitigation from the error message.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_description" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Supply Chain instance description. (pattern: &lt;code&gt;(&#91;a-zA-Z0-9., _ʼ'%-&#93;)&#123;0,500&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Supply Chain instance identifier. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_name" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Supply Chain instance name. (pattern: &lt;code&gt;(?!&#91; _ʼ'%-&#93;)&#91;a-zA-Z0-9 _ʼ'%-&#93;&#123;0,62&#125;&#91;a-zA-Z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you optionally provided for encryption. If you did not provide anything here, AWS Supply Chain uses the Amazon Web Services owned KMS key and nothing is returned. (pattern: &lt;code&gt;arn:&#91;a-z0-9&#93;&#91;-.a-z0-9&#93;&#123;0,62&#125;:kms:(&#91;a-z0-9&#93;&#91;-.a-z0-9&#93;&#123;0,62&#125;)?:(&#91;a-z0-9&#93;&#91;-.a-z0-9&#93;&#123;0,62&#125;)?:key/.&#123;0,1019&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The instance last modified timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the instance. (Initializing, Active, CreateFailed, DeleteFailed, Deleting, Deleted)</td>
</tr>
<tr>
    <td><CopyableCode code="version_number" /></td>
    <td><code>number (double)</code></td>
    <td>The version number of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="web_app_dns_domain" /></td>
    <td><code>string</code></td>
    <td>The WebApp DNS domain name of the instance. (pattern: &lt;code&gt;(?!&#91;-&#93;)&#91;a-zA-Z0-9-&#93;&#123;1,62&#125;&#91;a-zA-Z0-9&#93;&lt;/code&gt;)</td>
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
    <td><a href="#get_instance"><CopyableCode code="get_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables you to programmatically retrieve the information related to an Amazon Web Services Supply Chain instance ID.</td>
</tr>
<tr>
    <td><a href="#list_instances"><CopyableCode code="list_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-instanceNameFilter"><code>instanceNameFilter</code></a>, <a href="#parameter-instanceStateFilter"><code>instanceStateFilter</code></a></td>
    <td>List all Amazon Web Services Supply Chain instances for a specific account. Enables you to programmatically list all Amazon Web Services Supply Chain instances based on their account ID, instance name, and state of the instance (active or delete).</td>
</tr>
<tr>
    <td><a href="#create_instance"><CopyableCode code="create_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables you to programmatically create an Amazon Web Services Supply Chain instance by applying KMS keys and relevant information associated with the API without using the Amazon Web Services console. This is an asynchronous operation. Upon receiving a CreateInstance request, Amazon Web Services Supply Chain immediately returns the instance resource, instance ID, and the initializing state while simultaneously creating all required Amazon Web Services resources for an instance creation. You can use GetInstance to check the status of the instance. If the instance results in an unhealthy state, you need to check the error message, delete the current instance, and recreate a new one based on the mitigation from the error message.</td>
</tr>
<tr>
    <td><a href="#update_instance"><CopyableCode code="update_instance" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables you to programmatically update an Amazon Web Services Supply Chain instance description by providing all the relevant information such as account ID, instance ID and so on without using the AWS console.</td>
</tr>
<tr>
    <td><a href="#delete_instance"><CopyableCode code="delete_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables you to programmatically delete an Amazon Web Services Supply Chain instance by deleting the KMS keys and relevant information associated with the API without using the Amazon Web Services console. This is an asynchronous operation. Upon receiving a DeleteInstance request, Amazon Web Services Supply Chain immediately returns a response with the instance resource, delete state while cleaning up all Amazon Web Services resources created during the instance creation process. You can use the GetInstance action to check the instance status.</td>
</tr>
<tr>
    <td><a href="#send_data_integration_event"><CopyableCode code="send_data_integration_event" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-eventType"><code>eventType</code></a>, <a href="#parameter-data"><code>data</code></a>, <a href="#parameter-eventGroupId"><code>eventGroupId</code></a></td>
    <td></td>
    <td>Send the data payload for the event with real-time data for analysis or monitoring. The real-time data events are stored in an Amazon Web Services service before being processed and stored in data lake.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The AWS Supply Chain instance identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-instanceNameFilter">
    <td><CopyableCode code="instanceNameFilter" /></td>
    <td><code>array</code></td>
    <td>The filter to ListInstances based on their names.</td>
</tr>
<tr id="parameter-instanceStateFilter">
    <td><CopyableCode code="instanceStateFilter" /></td>
    <td><code>array</code></td>
    <td>The filter to ListInstances based on their state.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Specify the maximum number of instances to fetch in this paginated request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token to fetch the next page of instances.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_instance"
    values={[
        { label: 'get_instance', value: 'get_instance' },
        { label: 'list_instances', value: 'list_instances' }
    ]}
>
<TabItem value="get_instance">

Enables you to programmatically retrieve the information related to an Amazon Web Services Supply Chain instance ID.

```sql
SELECT
aws_account_id,
created_time,
error_message,
instance_description,
instance_id,
instance_name,
kms_key_arn,
last_modified_time,
state,
version_number,
web_app_dns_domain
FROM aws.supplychain.instances
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_instances">

List all Amazon Web Services Supply Chain instances for a specific account. Enables you to programmatically list all Amazon Web Services Supply Chain instances based on their account ID, instance name, and state of the instance (active or delete).

```sql
SELECT
aws_account_id,
created_time,
error_message,
instance_description,
instance_id,
instance_name,
kms_key_arn,
last_modified_time,
state,
version_number,
web_app_dns_domain
FROM aws.supplychain.instances
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND instanceNameFilter = '{{ instanceNameFilter }}'
AND instanceStateFilter = '{{ instanceStateFilter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_instance"
    values={[
        { label: 'create_instance', value: 'create_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_instance">

Enables you to programmatically create an Amazon Web Services Supply Chain instance by applying KMS keys and relevant information associated with the API without using the Amazon Web Services console. This is an asynchronous operation. Upon receiving a CreateInstance request, Amazon Web Services Supply Chain immediately returns the instance resource, instance ID, and the initializing state while simultaneously creating all required Amazon Web Services resources for an instance creation. You can use GetInstance to check the status of the instance. If the instance results in an unhealthy state, you need to check the error message, delete the current instance, and recreate a new one based on the mitigation from the error message.

```sql
INSERT INTO aws.supplychain.instances (
instanceName,
instanceDescription,
kmsKeyArn,
webAppDnsDomain,
tags,
clientToken,
region
)
SELECT 
'{{ instanceName }}',
'{{ instanceDescription }}',
'{{ kmsKeyArn }}',
'{{ webAppDnsDomain }}',
'{{ tags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
instance
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instances
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instances resource.
    - name: instanceName
      value: "{{ instanceName }}"
    - name: instanceDescription
      value: "{{ instanceDescription }}"
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
    - name: webAppDnsDomain
      value: "{{ webAppDnsDomain }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_instance"
    values={[
        { label: 'update_instance', value: 'update_instance' }
    ]}
>
<TabItem value="update_instance">

Enables you to programmatically update an Amazon Web Services Supply Chain instance description by providing all the relevant information such as account ID, instance ID and so on without using the AWS console.

```sql
UPDATE aws.supplychain.instances
SET 
instanceName = '{{ instanceName }}',
instanceDescription = '{{ instanceDescription }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
RETURNING
instance;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_instance"
    values={[
        { label: 'delete_instance', value: 'delete_instance' }
    ]}
>
<TabItem value="delete_instance">

Enables you to programmatically delete an Amazon Web Services Supply Chain instance by deleting the KMS keys and relevant information associated with the API without using the Amazon Web Services console. This is an asynchronous operation. Upon receiving a DeleteInstance request, Amazon Web Services Supply Chain immediately returns a response with the instance resource, delete state while cleaning up all Amazon Web Services resources created during the instance creation process. You can use the GetInstance action to check the instance status.

```sql
DELETE FROM aws.supplychain.instances
WHERE instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="send_data_integration_event"
    values={[
        { label: 'send_data_integration_event', value: 'send_data_integration_event' }
    ]}
>
<TabItem value="send_data_integration_event">

Send the data payload for the event with real-time data for analysis or monitoring. The real-time data events are stored in an Amazon Web Services service before being processed and stored in data lake.

```sql
EXEC aws.supplychain.instances.send_data_integration_event 
@instance_id='{{ instance_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"eventType": "{{ eventType }}", 
"data": "{{ data }}", 
"eventGroupId": "{{ eventGroupId }}", 
"eventTimestamp": "{{ eventTimestamp }}", 
"clientToken": "{{ clientToken }}", 
"datasetTarget": "{{ datasetTarget }}"
}'
;
```
</TabItem>
</Tabs>
