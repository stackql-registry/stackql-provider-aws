--- 
title: ops_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - ops_metadatas
  - ssm
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

Creates, updates, deletes, gets or lists an <code>ops_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ops_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.ops_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ops_metadata"
    values={[
        { label: 'get_ops_metadata', value: 'get_ops_metadata' },
        { label: 'list_ops_metadata', value: 'list_ops_metadata' }
    ]}
>
<TabItem value="get_ops_metadata">

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
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>OpsMetadata for an Application Manager application.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. Use this token to get the next set of results.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The resource ID of the Application Manager application. (pattern: &lt;code&gt;^(?!\s*$).+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ops_metadata">

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the OpsMetadata objects was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the OpsMetadata object was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_user" /></td>
    <td><code>string</code></td>
    <td>The user name who last updated the OpsMetadata object.</td>
</tr>
<tr>
    <td><CopyableCode code="ops_metadata_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the OpsMetadata Object or blob. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:ssm:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:opsmetadata\/(&#91;a-zA-Z0-9-_\.\/&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Application Manager application. (pattern: &lt;code&gt;^(?!\s*$).+&lt;/code&gt;)</td>
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
    <td><a href="#get_ops_metadata"><CopyableCode code="get_ops_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>View operational metadata related to an application in Application Manager.</td>
</tr>
<tr>
    <td><a href="#list_ops_metadata"><CopyableCode code="list_ops_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Amazon Web Services Systems Manager calls this API operation when displaying all Application Manager OpsMetadata objects or blobs.</td>
</tr>
<tr>
    <td><a href="#create_ops_metadata"><CopyableCode code="create_ops_metadata" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a></td>
    <td></td>
    <td>If you create a new application in Application Manager, Amazon Web Services Systems Manager calls this API operation to specify information about the new application, including the application type.</td>
</tr>
<tr>
    <td><a href="#update_ops_metadata"><CopyableCode code="update_ops_metadata" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OpsMetadataArn"><code>OpsMetadataArn</code></a></td>
    <td></td>
    <td>Amazon Web Services Systems Manager calls this API operation when you edit OpsMetadata in Application Manager.</td>
</tr>
<tr>
    <td><a href="#delete_ops_metadata"><CopyableCode code="delete_ops_metadata" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete OpsMetadata related to an application.</td>
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
    defaultValue="get_ops_metadata"
    values={[
        { label: 'get_ops_metadata', value: 'get_ops_metadata' },
        { label: 'list_ops_metadata', value: 'list_ops_metadata' }
    ]}
>
<TabItem value="get_ops_metadata">

View operational metadata related to an application in Application Manager.

```sql
SELECT
metadata,
next_token,
resource_id
FROM aws.ssm.ops_metadatas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ops_metadata">

Amazon Web Services Systems Manager calls this API operation when displaying all Application Manager OpsMetadata objects or blobs.

```sql
SELECT
creation_date,
last_modified_date,
last_modified_user,
ops_metadata_arn,
resource_id
FROM aws.ssm.ops_metadatas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ops_metadata"
    values={[
        { label: 'create_ops_metadata', value: 'create_ops_metadata' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ops_metadata">

If you create a new application in Application Manager, Amazon Web Services Systems Manager calls this API operation to specify information about the new application, including the application type.

```sql
INSERT INTO aws.ssm.ops_metadatas (
ResourceId,
Metadata,
Tags,
region
)
SELECT 
'{{ ResourceId }}' /* required */,
'{{ Metadata }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
ops_metadata_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ops_metadatas
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ops_metadatas resource.
    - name: ResourceId
      value: "{{ ResourceId }}"
      description: |
        A resource ID for a new Application Manager application.
    - name: Metadata
      value: "{{ Metadata }}"
      description: |
        Metadata for a new Application Manager application.
    - name: Tags
      description: |
        Optional metadata that you assign to a resource. You can specify a maximum of five tags for an OpsMetadata object. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag an OpsMetadata object to identify an environment or target Amazon Web Services Region. In this case, you could specify the following key-value pairs: Key=Environment,Value=Production Key=Region,Value=us-east-2
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ops_metadata"
    values={[
        { label: 'update_ops_metadata', value: 'update_ops_metadata' }
    ]}
>
<TabItem value="update_ops_metadata">

Amazon Web Services Systems Manager calls this API operation when you edit OpsMetadata in Application Manager.

```sql
UPDATE aws.ssm.ops_metadatas
SET 
OpsMetadataArn = '{{ OpsMetadataArn }}',
MetadataToUpdate = '{{ MetadataToUpdate }}',
KeysToDelete = '{{ KeysToDelete }}'
WHERE 
region = '{{ region }}' --required
AND OpsMetadataArn = '{{ OpsMetadataArn }}' --required
RETURNING
ops_metadata_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ops_metadata"
    values={[
        { label: 'delete_ops_metadata', value: 'delete_ops_metadata' }
    ]}
>
<TabItem value="delete_ops_metadata">

Delete OpsMetadata related to an application.

```sql
DELETE FROM aws.ssm.ops_metadatas
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
