--- 
title: rules_packages
hide_title: false
hide_table_of_contents: false
keywords:
  - rules_packages
  - inspector
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

Creates, updates, deletes, gets or lists a <code>rules_packages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rules_packages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector.rules_packages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_rules_packages"
    values={[
        { label: 'describe_rules_packages', value: 'describe_rules_packages' },
        { label: 'list_rules_packages', value: 'list_rules_packages' }
    ]}
>
<TabItem value="describe_rules_packages">

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
    <td><CopyableCode code="failedItems" /></td>
    <td><code>object</code></td>
    <td>Rules package details that cannot be described. An error code is provided for each failed item.</td>
</tr>
<tr>
    <td><CopyableCode code="rulesPackages" /></td>
    <td><code>array</code></td>
    <td>Information about the rules package.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_rules_packages">

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
    <td><CopyableCode code="rules_package_arn" /></td>
    <td><code>string</code></td>
    <td>The list of ARNs that specifies the rules packages returned by the action.</td>
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
    <td><a href="#describe_rules_packages"><CopyableCode code="describe_rules_packages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the rules packages that are specified by the ARNs of the rules packages.</td>
</tr>
<tr>
    <td><a href="#list_rules_packages"><CopyableCode code="list_rules_packages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all available Amazon Inspector rules packages.</td>
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
    defaultValue="describe_rules_packages"
    values={[
        { label: 'describe_rules_packages', value: 'describe_rules_packages' },
        { label: 'list_rules_packages', value: 'list_rules_packages' }
    ]}
>
<TabItem value="describe_rules_packages">

Describes the rules packages that are specified by the ARNs of the rules packages.

```sql
SELECT
failedItems,
rulesPackages
FROM aws.inspector.rules_packages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_rules_packages">

Lists all available Amazon Inspector rules packages.

```sql
SELECT
rules_package_arn
FROM aws.inspector.rules_packages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
