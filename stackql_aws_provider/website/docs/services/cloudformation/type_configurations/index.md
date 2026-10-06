--- 
title: type_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - type_configurations
  - cloudformation
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

Creates, updates, deletes, gets or lists a <code>type_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="type_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.type_configurations" /></td></tr>
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
    <td><a href="#batch_describe_type_configurations"><CopyableCode code="batch_describe_type_configurations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TypeConfigurationIdentifiers"><code>TypeConfigurationIdentifiers</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns configuration data for the specified CloudFormation extensions, from the CloudFormation registry in your current account and Region. For more information, see Edit configuration data for extensions in your account in the CloudFormation User Guide.</td>
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
<tr id="parameter-TypeConfigurationIdentifiers">
    <td><CopyableCode code="TypeConfigurationIdentifiers" /></td>
    <td><code>array</code></td>
    <td>The list of identifiers for the desired extension configurations.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="batch_describe_type_configurations"
    values={[
        { label: 'batch_describe_type_configurations', value: 'batch_describe_type_configurations' }
    ]}
>
<TabItem value="batch_describe_type_configurations">

Returns configuration data for the specified CloudFormation extensions, from the CloudFormation registry in your current account and Region. For more information, see Edit configuration data for extensions in your account in the CloudFormation User Guide.

```sql
EXEC aws.cloudformation.type_configurations.batch_describe_type_configurations 
@TypeConfigurationIdentifiers='{{ TypeConfigurationIdentifiers }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
