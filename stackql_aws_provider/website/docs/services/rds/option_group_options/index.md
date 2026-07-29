--- 
title: option_group_options
hide_title: false
hide_table_of_contents: false
keywords:
  - option_group_options
  - rds
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

Creates, updates, deletes, gets or lists an <code>option_group_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="option_group_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.option_group_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_option_group_options"
    values={[
        { label: 'describe_option_group_options', value: 'describe_option_group_options' }
    ]}
>
<TabItem value="describe_option_group_options">

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
    <td><CopyableCode code="copyable_cross_account" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the option can be copied across Amazon Web Services accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="default_port" /></td>
    <td><code>integer</code></td>
    <td>If the option requires a port, specifies the default port for the option.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the option.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_name" /></td>
    <td><code>string</code></td>
    <td>The name of the engine that this option can be applied to.</td>
</tr>
<tr>
    <td><CopyableCode code="major_engine_version" /></td>
    <td><code>string</code></td>
    <td>Indicates the major engine version that the option is available for.</td>
</tr>
<tr>
    <td><CopyableCode code="minimum_required_minor_engine_version" /></td>
    <td><code>string</code></td>
    <td>The minimum required engine version for the option to be applied.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the option.</td>
</tr>
<tr>
    <td><CopyableCode code="option_group_option_settings" /></td>
    <td><code>string</code></td>
    <td>The option settings that are available (and the default value) for each option in an option group.</td>
</tr>
<tr>
    <td><CopyableCode code="option_group_option_versions" /></td>
    <td><code>string</code></td>
    <td>The versions that are available for the option.</td>
</tr>
<tr>
    <td><CopyableCode code="options_conflicts_with" /></td>
    <td><code>string</code></td>
    <td>The options that conflict with this option.</td>
</tr>
<tr>
    <td><CopyableCode code="options_depended_on" /></td>
    <td><code>string</code></td>
    <td>The options that are prerequisites for this option.</td>
</tr>
<tr>
    <td><CopyableCode code="permanent" /></td>
    <td><code>boolean</code></td>
    <td>Permanent options can never be removed from an option group. An option group containing a permanent option can't be removed from a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="persistent" /></td>
    <td><code>boolean</code></td>
    <td>Persistent options can't be removed from an option group while DB instances are associated with the option group. If you disassociate all DB instances from the option group, your can remove the persistent option from the option group.</td>
</tr>
<tr>
    <td><CopyableCode code="port_required" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the option requires a port.</td>
</tr>
<tr>
    <td><CopyableCode code="requires_auto_minor_engine_version_upgrade" /></td>
    <td><code>boolean</code></td>
    <td>If true, you must enable the Auto Minor Version Upgrade setting for your DB instance before you can use this option. You can enable Auto Minor Version Upgrade when you first create your DB instance, or by modifying your DB instance later.</td>
</tr>
<tr>
    <td><CopyableCode code="supports_option_version_downgrade" /></td>
    <td><code>boolean</code></td>
    <td>If true, you can change the option to an earlier version of the option. This only applies to options that have different versions available.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_only" /></td>
    <td><code>boolean</code></td>
    <td>If true, you can only use this option with a DB instance that is in a VPC.</td>
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
    <td><a href="#describe_option_group_options"><CopyableCode code="describe_option_group_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-EngineName"><code>EngineName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MajorEngineVersion"><code>MajorEngineVersion</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Describes all available options for the specified engine.</td>
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
<tr id="parameter-EngineName">
    <td><CopyableCode code="EngineName" /></td>
    <td><code>string</code></td>
    <td>The name of the engine to describe options for. Valid Values: db2-ae db2-se mariadb mysql oracle-ee oracle-ee-cdb oracle-se2 oracle-se2-cdb postgres sqlserver-ee sqlserver-se sqlserver-ex sqlserver-web</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter isn't currently supported.</td>
</tr>
<tr id="parameter-MajorEngineVersion">
    <td><CopyableCode code="MajorEngineVersion" /></td>
    <td><code>string</code></td>
    <td>If specified, filters the results to include only options for the specified major engine version.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_option_group_options"
    values={[
        { label: 'describe_option_group_options', value: 'describe_option_group_options' }
    ]}
>
<TabItem value="describe_option_group_options">

Describes all available options for the specified engine.

```sql
SELECT
copyable_cross_account,
default_port,
description,
engine_name,
major_engine_version,
minimum_required_minor_engine_version,
name,
option_group_option_settings,
option_group_option_versions,
options_conflicts_with,
options_depended_on,
permanent,
persistent,
port_required,
requires_auto_minor_engine_version_upgrade,
supports_option_version_downgrade,
vpc_only
FROM aws.rds.option_group_options
WHERE EngineName = '{{ EngineName }}' -- required
AND region = '{{ region }}' -- required
AND MajorEngineVersion = '{{ MajorEngineVersion }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
