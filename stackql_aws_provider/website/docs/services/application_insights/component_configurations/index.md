--- 
title: component_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - component_configurations
  - application_insights
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

Creates, updates, deletes, gets or lists a <code>component_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="component_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_insights.component_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_component_configuration"
    values={[
        { label: 'describe_component_configuration', value: 'describe_component_configuration' }
    ]}
>
<TabItem value="describe_component_configuration">

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
    <td><CopyableCode code="ComponentConfiguration" /></td>
    <td><code>string</code></td>
    <td>The configuration settings of the component. The value is the escaped JSON of the configuration. (pattern: &lt;code&gt;&#91;\S\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Monitor" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the application component is monitored.</td>
</tr>
<tr>
    <td><CopyableCode code="Tier" /></td>
    <td><code>string</code></td>
    <td>The tier of the application component. Supported tiers include DOT_NET_CORE, DOT_NET_WORKER, DOT_NET_WEB, SQL_SERVER, and DEFAULT (CUSTOM, DEFAULT, DOT_NET_CORE, DOT_NET_WORKER, DOT_NET_WEB_TIER, DOT_NET_WEB, SQL_SERVER, SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP, MYSQL, POSTGRESQL, JAVA_JMX, ORACLE, SAP_HANA_MULTI_NODE, SAP_HANA_SINGLE_NODE, SAP_HANA_HIGH_AVAILABILITY, SAP_ASE_SINGLE_NODE, SAP_ASE_HIGH_AVAILABILITY, SQL_SERVER_FAILOVER_CLUSTER_INSTANCE, SHAREPOINT, ACTIVE_DIRECTORY, SAP_NETWEAVER_STANDARD, SAP_NETWEAVER_DISTRIBUTED, SAP_NETWEAVER_HIGH_AVAILABILITY)</td>
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
    <td><a href="#describe_component_configuration"><CopyableCode code="describe_component_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the monitoring configuration of the component.</td>
</tr>
<tr>
    <td><a href="#update_component_configuration"><CopyableCode code="update_component_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceGroupName"><code>ResourceGroupName</code></a>, <a href="#parameter-ComponentName"><code>ComponentName</code></a></td>
    <td></td>
    <td>Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by DescribeComponentConfigurationRecommendation.</td>
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
    defaultValue="describe_component_configuration"
    values={[
        { label: 'describe_component_configuration', value: 'describe_component_configuration' }
    ]}
>
<TabItem value="describe_component_configuration">

Describes the monitoring configuration of the component.

```sql
SELECT
ComponentConfiguration,
Monitor,
Tier
FROM aws.application_insights.component_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_component_configuration"
    values={[
        { label: 'update_component_configuration', value: 'update_component_configuration' }
    ]}
>
<TabItem value="update_component_configuration">

Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by DescribeComponentConfigurationRecommendation.

```sql
UPDATE aws.application_insights.component_configurations
SET 
ResourceGroupName = '{{ ResourceGroupName }}',
ComponentName = '{{ ComponentName }}',
Monitor = {{ Monitor }},
Tier = '{{ Tier }}',
ComponentConfiguration = '{{ ComponentConfiguration }}',
AutoConfigEnabled = {{ AutoConfigEnabled }}
WHERE 
region = '{{ region }}' --required
AND ResourceGroupName = '{{ ResourceGroupName }}' --required
AND ComponentName = '{{ ComponentName }}' --required;
```
</TabItem>
</Tabs>
