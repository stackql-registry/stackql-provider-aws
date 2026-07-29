--- 
title: addon_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - addon_configurations
  - eks
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

Creates, updates, deletes, gets or lists an <code>addon_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="addon_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks.addon_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_addon_configuration"
    values={[
        { label: 'describe_addon_configuration', value: 'describe_addon_configuration' }
    ]}
>
<TabItem value="describe_addon_configuration">

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
    <td><CopyableCode code="addon_name" /></td>
    <td><code>string</code></td>
    <td>The name of the add-on.</td>
</tr>
<tr>
    <td><CopyableCode code="addon_version" /></td>
    <td><code>string</code></td>
    <td>The version of the add-on. The version must match one of the versions returned by DescribeAddonVersions .</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_schema" /></td>
    <td><code>string</code></td>
    <td>A JSON schema that's used to validate the configuration values you provide when an add-on is created or updated.</td>
</tr>
<tr>
    <td><CopyableCode code="pod_identity_configuration" /></td>
    <td><code>array</code></td>
    <td>The Kubernetes service account name used by the add-on, and any suggested IAM policies. Use this information to create an IAM Role for the add-on.</td>
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
    <td><a href="#describe_addon_configuration"><CopyableCode code="describe_addon_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-addonName"><code>addonName</code></a>, <a href="#parameter-addonVersion"><code>addonVersion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns configuration options.</td>
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
<tr id="parameter-addonName">
    <td><CopyableCode code="addonName" /></td>
    <td><code>string</code></td>
    <td>The name of the add-on. The name must match one of the names returned by DescribeAddonVersions.</td>
</tr>
<tr id="parameter-addonVersion">
    <td><CopyableCode code="addonVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the add-on. The version must match one of the versions returned by DescribeAddonVersions .</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_addon_configuration"
    values={[
        { label: 'describe_addon_configuration', value: 'describe_addon_configuration' }
    ]}
>
<TabItem value="describe_addon_configuration">

Returns configuration options.

```sql
SELECT
addon_name,
addon_version,
configuration_schema,
pod_identity_configuration
FROM aws.eks.addon_configurations
WHERE addonName = '{{ addonName }}' -- required
AND addonVersion = '{{ addonVersion }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
