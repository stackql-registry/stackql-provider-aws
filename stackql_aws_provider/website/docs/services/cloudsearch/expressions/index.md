--- 
title: expressions
hide_title: false
hide_table_of_contents: false
keywords:
  - expressions
  - cloudsearch
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

Creates, updates, deletes, gets or lists an <code>expressions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="expressions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudsearch.expressions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_expressions"
    values={[
        { label: 'describe_expressions', value: 'describe_expressions' }
    ]}
>
<TabItem value="describe_expressions">

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
    <td><CopyableCode code="Options" /></td>
    <td><code>string</code></td>
    <td>The expression that is evaluated for sorting while processing a search request.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of domain configuration option.</td>
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
    <td><a href="#describe_expressions"><CopyableCode code="describe_expressions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ExpressionNames"><code>ExpressionNames</code></a>, <a href="#parameter-Deployed"><code>Deployed</code></a></td>
    <td>Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Configuring Expressions in the Amazon CloudSearch Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_expression"><CopyableCode code="delete_expression" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-ExpressionName"><code>ExpressionName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes an Expression from the search domain. For more information, see Configuring Expressions in the Amazon CloudSearch Developer Guide.</td>
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
<tr id="parameter-DomainName">
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ExpressionName">
    <td><CopyableCode code="ExpressionName" /></td>
    <td><code>string</code></td>
    <td>The name of the Expression to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Deployed">
    <td><CopyableCode code="Deployed" /></td>
    <td><code>boolean</code></td>
    <td>Whether to display the deployed configuration (true) or include any pending changes (false). Defaults to false.</td>
</tr>
<tr id="parameter-ExpressionNames">
    <td><CopyableCode code="ExpressionNames" /></td>
    <td><code>array</code></td>
    <td>Limits the DescribeExpressions response to the specified expressions. If not specified, all expressions are shown.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_expressions"
    values={[
        { label: 'describe_expressions', value: 'describe_expressions' }
    ]}
>
<TabItem value="describe_expressions">

Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Configuring Expressions in the Amazon CloudSearch Developer Guide.

```sql
SELECT
Options,
Status
FROM aws.cloudsearch.expressions
WHERE DomainName = '{{ DomainName }}' -- required
AND region = '{{ region }}' -- required
AND ExpressionNames = '{{ ExpressionNames }}'
AND Deployed = '{{ Deployed }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_expression"
    values={[
        { label: 'delete_expression', value: 'delete_expression' }
    ]}
>
<TabItem value="delete_expression">

Removes an Expression from the search domain. For more information, see Configuring Expressions in the Amazon CloudSearch Developer Guide.

```sql
DELETE FROM aws.cloudsearch.expressions
WHERE DomainName = '{{ DomainName }}' --required
AND ExpressionName = '{{ ExpressionName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
