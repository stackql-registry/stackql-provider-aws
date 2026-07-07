--- 
title: hubs
hide_title: false
hide_table_of_contents: false
keywords:
  - hubs
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>hubs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hubs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.hubs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_hub"
    values={[
        { label: 'describe_hub', value: 'describe_hub' },
        { label: 'list_hubs', value: 'list_hubs' }
    ]}
>
<TabItem value="describe_hub">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the hub was created.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>The failure reason if importing hub content failed.</td>
</tr>
<tr>
    <td><CopyableCode code="HubArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the hub. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HubDescription" /></td>
    <td><code>string</code></td>
    <td>A description of the hub. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HubDisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the hub. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HubName" /></td>
    <td><code>string</code></td>
    <td>The name of the hub. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HubSearchKeywords" /></td>
    <td><code>array</code></td>
    <td>The searchable keywords for the hub.</td>
</tr>
<tr>
    <td><CopyableCode code="HubStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the hub. (InService, Creating, Updating, Deleting, CreateFailed, UpdateFailed, DeleteFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the hub was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="S3StorageConfig" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 storage configuration for the hub.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_hubs">

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
    <td><CopyableCode code="HubSummaries" /></td>
    <td><code>array</code></td>
    <td>The summaries of the listed hubs.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If the response is truncated, SageMaker returns this token. To retrieve the next set of hubs, use it in the subsequent request. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_hub"><CopyableCode code="describe_hub" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a hub.</td>
</tr>
<tr>
    <td><a href="#list_hubs"><CopyableCode code="list_hubs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all existing hubs.</td>
</tr>
<tr>
    <td><a href="#create_hub"><CopyableCode code="create_hub" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HubName"><code>HubName</code></a>, <a href="#parameter-HubDescription"><code>HubDescription</code></a></td>
    <td></td>
    <td>Create a hub.</td>
</tr>
<tr>
    <td><a href="#update_hub"><CopyableCode code="update_hub" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HubName"><code>HubName</code></a></td>
    <td></td>
    <td>Update a hub.</td>
</tr>
<tr>
    <td><a href="#delete_hub"><CopyableCode code="delete_hub" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a hub.</td>
</tr>
<tr>
    <td><a href="#import_hub_content"><CopyableCode code="import_hub_content" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HubContentName"><code>HubContentName</code></a>, <a href="#parameter-HubContentType"><code>HubContentType</code></a>, <a href="#parameter-DocumentSchemaVersion"><code>DocumentSchemaVersion</code></a>, <a href="#parameter-HubName"><code>HubName</code></a>, <a href="#parameter-HubContentDocument"><code>HubContentDocument</code></a></td>
    <td></td>
    <td>Import hub content.</td>
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
    defaultValue="describe_hub"
    values={[
        { label: 'describe_hub', value: 'describe_hub' },
        { label: 'list_hubs', value: 'list_hubs' }
    ]}
>
<TabItem value="describe_hub">

Describes a hub.

```sql
SELECT
CreationTime,
FailureReason,
HubArn,
HubDescription,
HubDisplayName,
HubName,
HubSearchKeywords,
HubStatus,
LastModifiedTime,
S3StorageConfig
FROM aws.sagemaker.hubs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_hubs">

List all existing hubs.

```sql
SELECT
HubSummaries,
NextToken
FROM aws.sagemaker.hubs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_hub"
    values={[
        { label: 'create_hub', value: 'create_hub' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_hub">

Create a hub.

```sql
INSERT INTO aws.sagemaker.hubs (
HubName,
HubDescription,
HubDisplayName,
HubSearchKeywords,
S3StorageConfig,
Tags,
region
)
SELECT 
'{{ HubName }}' /* required */,
'{{ HubDescription }}' /* required */,
'{{ HubDisplayName }}',
'{{ HubSearchKeywords }}',
'{{ S3StorageConfig }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
HubArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: hubs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the hubs resource.
    - name: HubName
      value: "{{ HubName }}"
      description: |
        The name of the hub to create.
    - name: HubDescription
      value: "{{ HubDescription }}"
      description: |
        A description of the hub.
    - name: HubDisplayName
      value: "{{ HubDisplayName }}"
      description: |
        The display name of the hub.
    - name: HubSearchKeywords
      value:
        - "{{ HubSearchKeywords }}"
      description: |
        The searchable keywords for the hub.
    - name: S3StorageConfig
      description: |
        The Amazon S3 storage configuration for the hub.
      value:
        S3OutputPath: "{{ S3OutputPath }}"
    - name: Tags
      description: |
        Any tags to associate with the hub.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_hub"
    values={[
        { label: 'update_hub', value: 'update_hub' }
    ]}
>
<TabItem value="update_hub">

Update a hub.

```sql
UPDATE aws.sagemaker.hubs
SET 
HubName = '{{ HubName }}',
HubDescription = '{{ HubDescription }}',
HubDisplayName = '{{ HubDisplayName }}',
HubSearchKeywords = '{{ HubSearchKeywords }}'
WHERE 
region = '{{ region }}' --required
AND HubName = '{{ HubName }}' --required
RETURNING
HubArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_hub"
    values={[
        { label: 'delete_hub', value: 'delete_hub' }
    ]}
>
<TabItem value="delete_hub">

Delete a hub.

```sql
DELETE FROM aws.sagemaker.hubs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import_hub_content"
    values={[
        { label: 'import_hub_content', value: 'import_hub_content' }
    ]}
>
<TabItem value="import_hub_content">

Import hub content.

```sql
EXEC aws.sagemaker.hubs.import_hub_content 
@region='{{ region }}' --required 
@@json=
'{
"HubContentName": "{{ HubContentName }}", 
"HubContentVersion": "{{ HubContentVersion }}", 
"HubContentType": "{{ HubContentType }}", 
"DocumentSchemaVersion": "{{ DocumentSchemaVersion }}", 
"HubName": "{{ HubName }}", 
"HubContentDisplayName": "{{ HubContentDisplayName }}", 
"HubContentDescription": "{{ HubContentDescription }}", 
"HubContentMarkdown": "{{ HubContentMarkdown }}", 
"HubContentDocument": "{{ HubContentDocument }}", 
"SupportStatus": "{{ SupportStatus }}", 
"HubContentSearchKeywords": "{{ HubContentSearchKeywords }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
