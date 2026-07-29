--- 
title: schema_extensions
hide_title: false
hide_table_of_contents: false
keywords:
  - schema_extensions
  - ds
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

Creates, updates, deletes, gets or lists a <code>schema_extensions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schema_extensions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.schema_extensions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_schema_extensions"
    values={[
        { label: 'list_schema_extensions', value: 'list_schema_extensions' }
    ]}
>
<TabItem value="list_schema_extensions">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the schema extension. (pattern: &lt;code&gt;^(&#91;a-zA-Z0-9_&#93;)&#91;\\a-zA-Z0-9_@#%*+=:?./!\s-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="directory_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the directory to which the schema extension is applied. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the schema extension was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_extension_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the schema extension. (pattern: &lt;code&gt;^e-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_extension_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the schema extension. (Initializing, CreatingSnapshot, UpdatingSchema, Replicating, CancelInProgress, RollbackInProgress, Cancelled, Failed, Completed)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_extension_status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the SchemaExtensionStatus.</td>
</tr>
<tr>
    <td><CopyableCode code="start_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the schema extension started being applied to the directory.</td>
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
    <td><a href="#list_schema_extensions"><CopyableCode code="list_schema_extensions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all schema extensions applied to a Microsoft AD Directory.</td>
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
    defaultValue="list_schema_extensions"
    values={[
        { label: 'list_schema_extensions', value: 'list_schema_extensions' }
    ]}
>
<TabItem value="list_schema_extensions">

Lists all schema extensions applied to a Microsoft AD Directory.

```sql
SELECT
description,
directory_id,
end_date_time,
schema_extension_id,
schema_extension_status,
schema_extension_status_reason,
start_date_time
FROM aws.ds.schema_extensions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
