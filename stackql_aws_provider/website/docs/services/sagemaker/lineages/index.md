--- 
title: lineages
hide_title: false
hide_table_of_contents: false
keywords:
  - lineages
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

Creates, updates, deletes, gets or lists a <code>lineages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lineages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.lineages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#query_lineage"><CopyableCode code="query_lineage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this action to inspect your lineage and discover relationships between entities. For more information, see Querying Lineage Entities in the Amazon SageMaker Developer Guide.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="query_lineage"
    values={[
        { label: 'query_lineage', value: 'query_lineage' }
    ]}
>
<TabItem value="query_lineage">

Use this action to inspect your lineage and discover relationships between entities. For more information, see Querying Lineage Entities in the Amazon SageMaker Developer Guide.

```sql
EXEC aws.sagemaker.lineages.query_lineage 
@region='{{ region }}' --required 
@@json=
'{
"StartArns": "{{ StartArns }}", 
"Direction": "{{ Direction }}", 
"IncludeEdges": {{ IncludeEdges }}, 
"Filters": "{{ Filters }}", 
"MaxDepth": {{ MaxDepth }}, 
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
</Tabs>
