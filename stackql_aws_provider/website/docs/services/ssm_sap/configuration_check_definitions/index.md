--- 
title: configuration_check_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_check_definitions
  - ssm_sap
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

Creates, updates, deletes, gets or lists a <code>configuration_check_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_check_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_sap.configuration_check_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_configuration_check_definitions"
    values={[
        { label: 'list_configuration_check_definitions', value: 'list_configuration_check_definitions' }
    ]}
>
<TabItem value="list_configuration_check_definitions">

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
    <td><CopyableCode code="ApplicableApplicationTypes" /></td>
    <td><code>array</code></td>
    <td>The list of SSMSAP application types that this configuration check can be evaluated against.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of what the configuration check validates.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the configuration check. (SAP_CHECK_01, SAP_CHECK_02, SAP_CHECK_03)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration check.</td>
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
    <td><a href="#list_configuration_check_definitions"><CopyableCode code="list_configuration_check_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all configuration check types supported by AWS Systems Manager for SAP.</td>
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
    defaultValue="list_configuration_check_definitions"
    values={[
        { label: 'list_configuration_check_definitions', value: 'list_configuration_check_definitions' }
    ]}
>
<TabItem value="list_configuration_check_definitions">

Lists all configuration check types supported by AWS Systems Manager for SAP.

```sql
SELECT
ApplicableApplicationTypes,
Description,
Id,
Name
FROM aws.ssm_sap.configuration_check_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
