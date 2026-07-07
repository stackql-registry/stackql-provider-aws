--- 
title: connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors
  - mgn
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

Creates, updates, deletes, gets or lists a <code>connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgn.connectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_connectors"
    values={[
        { label: 'list_connectors', value: 'list_connectors' }
    ]}
>
<TabItem value="list_connectors">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Connector name. (pattern: &lt;code&gt;&#91;A-Za-z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Connector arn.</td>
</tr>
<tr>
    <td><CopyableCode code="connectorID" /></td>
    <td><code>string</code></td>
    <td>Connector ID. (pattern: &lt;code&gt;connector-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ssmCommandConfig" /></td>
    <td><code>object</code></td>
    <td>Connector SSM command config.</td>
</tr>
<tr>
    <td><CopyableCode code="ssmInstanceID" /></td>
    <td><code>string</code></td>
    <td>Connector SSM instance ID. (pattern: &lt;code&gt;.*(^i-&#91;0-9a-zA-Z&#93;&#123;17&#125;$)|(^mi-&#91;0-9a-zA-Z&#93;&#123;17&#125;$).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Connector tags.</td>
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
    <td><a href="#list_connectors"><CopyableCode code="list_connectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List Connectors.</td>
</tr>
<tr>
    <td><a href="#create_connector"><CopyableCode code="create_connector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-ssmInstanceID"><code>ssmInstanceID</code></a></td>
    <td></td>
    <td>Create Connector.</td>
</tr>
<tr>
    <td><a href="#update_connector"><CopyableCode code="update_connector" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectorID"><code>connectorID</code></a></td>
    <td></td>
    <td>Update Connector.</td>
</tr>
<tr>
    <td><a href="#delete_connector"><CopyableCode code="delete_connector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete Connector.</td>
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
    defaultValue="list_connectors"
    values={[
        { label: 'list_connectors', value: 'list_connectors' }
    ]}
>
<TabItem value="list_connectors">

List Connectors.

```sql
SELECT
name,
arn,
connectorID,
ssmCommandConfig,
ssmInstanceID,
tags
FROM aws.mgn.connectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connector"
    values={[
        { label: 'create_connector', value: 'create_connector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connector">

Create Connector.

```sql
INSERT INTO aws.mgn.connectors (
name,
ssmInstanceID,
tags,
ssmCommandConfig,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ ssmInstanceID }}' /* required */,
'{{ tags }}',
'{{ ssmCommandConfig }}',
'{{ region }}'
RETURNING
name,
arn,
connectorID,
ssmCommandConfig,
ssmInstanceID,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connectors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connectors resource.
    - name: name
      value: "{{ name }}"
    - name: ssmInstanceID
      value: "{{ ssmInstanceID }}"
    - name: tags
      value: "{{ tags }}"
    - name: ssmCommandConfig
      description: |
        Connector SSM command config.
      value:
        s3OutputEnabled: {{ s3OutputEnabled }}
        outputS3BucketName: "{{ outputS3BucketName }}"
        cloudWatchOutputEnabled: {{ cloudWatchOutputEnabled }}
        cloudWatchLogGroupName: "{{ cloudWatchLogGroupName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connector"
    values={[
        { label: 'update_connector', value: 'update_connector' }
    ]}
>
<TabItem value="update_connector">

Update Connector.

```sql
UPDATE aws.mgn.connectors
SET 
connectorID = '{{ connectorID }}',
name = '{{ name }}',
ssmCommandConfig = '{{ ssmCommandConfig }}'
WHERE 
region = '{{ region }}' --required
AND connectorID = '{{ connectorID }}' --required
RETURNING
name,
arn,
connectorID,
ssmCommandConfig,
ssmInstanceID,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connector"
    values={[
        { label: 'delete_connector', value: 'delete_connector' }
    ]}
>
<TabItem value="delete_connector">

Delete Connector.

```sql
DELETE FROM aws.mgn.connectors
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
