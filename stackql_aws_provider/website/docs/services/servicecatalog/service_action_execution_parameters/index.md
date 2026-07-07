--- 
title: service_action_execution_parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - service_action_execution_parameters
  - servicecatalog
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

Creates, updates, deletes, gets or lists a <code>service_action_execution_parameters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_action_execution_parameters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.service_action_execution_parameters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_service_action_execution_parameters"
    values={[
        { label: 'describe_service_action_execution_parameters', value: 'describe_service_action_execution_parameters' }
    ]}
>
<TabItem value="describe_service_action_execution_parameters">

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
    <td><CopyableCode code="ServiceActionParameters" /></td>
    <td><code>array</code></td>
    <td>The parameters of the self-service action.</td>
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
    <td><a href="#describe_service_action_execution_parameters"><CopyableCode code="describe_service_action_execution_parameters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.</td>
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
    defaultValue="describe_service_action_execution_parameters"
    values={[
        { label: 'describe_service_action_execution_parameters', value: 'describe_service_action_execution_parameters' }
    ]}
>
<TabItem value="describe_service_action_execution_parameters">

Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.

```sql
SELECT
ServiceActionParameters
FROM aws.servicecatalog.service_action_execution_parameters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
