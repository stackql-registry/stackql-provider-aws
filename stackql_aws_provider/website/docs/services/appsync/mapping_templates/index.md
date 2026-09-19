--- 
title: mapping_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - mapping_templates
  - appsync
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

Creates, updates, deletes, gets or lists a <code>mapping_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mapping_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appsync.mapping_templates" /></td></tr>
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
    <td><a href="#evaluate_mapping_template"><CopyableCode code="evaluate_mapping_template" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-template"><code>template</code></a>, <a href="#parameter-context"><code>context</code></a></td>
    <td></td>
    <td>Evaluates a given template and returns the response. The mapping template can be a request or response template. Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type. Mapping templates are written in the Apache Velocity Template Language (VTL).</td>
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
    defaultValue="evaluate_mapping_template"
    values={[
        { label: 'evaluate_mapping_template', value: 'evaluate_mapping_template' }
    ]}
>
<TabItem value="evaluate_mapping_template">

Evaluates a given template and returns the response. The mapping template can be a request or response template. Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type. Mapping templates are written in the Apache Velocity Template Language (VTL).

```sql
EXEC aws.appsync.mapping_templates.evaluate_mapping_template 
@region='{{ region }}' --required 
@@json=
'{
"template": "{{ template }}", 
"context": "{{ context }}"
}'
;
```
</TabItem>
</Tabs>
