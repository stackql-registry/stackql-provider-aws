--- 
title: logging_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - logging_configurations
  - network_firewall
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

Creates, updates, deletes, gets or lists a <code>logging_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="logging_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.logging_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_logging_configuration"
    values={[
        { label: 'describe_logging_configuration', value: 'describe_logging_configuration' }
    ]}
>
<TabItem value="describe_logging_configuration">

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
    <td><CopyableCode code="EnableMonitoringDashboard" /></td>
    <td><code>boolean</code></td>
    <td>A boolean that reflects whether or not the firewall monitoring dashboard is enabled on a firewall. Returns TRUE when the firewall monitoring dashboard is enabled on the firewall. Returns FALSE when the firewall monitoring dashboard is not enabled on the firewall.</td>
</tr>
<tr>
    <td><CopyableCode code="FirewallArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the firewall. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LoggingConfiguration" /></td>
    <td><code>object</code></td>
    <td>Defines how Network Firewall performs logging for a Firewall.</td>
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
    <td><a href="#describe_logging_configuration"><CopyableCode code="describe_logging_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the logging configuration for the specified firewall.</td>
</tr>
<tr>
    <td><a href="#update_logging_configuration"><CopyableCode code="update_logging_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sets the logging configuration for the specified firewall. To change the logging configuration, retrieve the LoggingConfiguration by calling DescribeLoggingConfiguration, then change it and provide the modified object to this update call. You must change the logging configuration one LogDestinationConfig at a time inside the retrieved LoggingConfiguration object. You can perform only one of the following actions in any call to UpdateLoggingConfiguration: Create a new log destination object by adding a single LogDestinationConfig array element to LogDestinationConfigs. Delete a log destination object by removing a single LogDestinationConfig array element from LogDestinationConfigs. Change the LogDestination setting in a single LogDestinationConfig array element. You can't change the LogDestinationType or LogType in a LogDestinationConfig. To change these settings, delete the existing LogDestinationConfig object and create a new one, using two separate calls to this update operation.</td>
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
    defaultValue="describe_logging_configuration"
    values={[
        { label: 'describe_logging_configuration', value: 'describe_logging_configuration' }
    ]}
>
<TabItem value="describe_logging_configuration">

Returns the logging configuration for the specified firewall.

```sql
SELECT
EnableMonitoringDashboard,
FirewallArn,
LoggingConfiguration
FROM aws.network_firewall.logging_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_logging_configuration"
    values={[
        { label: 'update_logging_configuration', value: 'update_logging_configuration' }
    ]}
>
<TabItem value="update_logging_configuration">

Sets the logging configuration for the specified firewall. To change the logging configuration, retrieve the LoggingConfiguration by calling DescribeLoggingConfiguration, then change it and provide the modified object to this update call. You must change the logging configuration one LogDestinationConfig at a time inside the retrieved LoggingConfiguration object. You can perform only one of the following actions in any call to UpdateLoggingConfiguration: Create a new log destination object by adding a single LogDestinationConfig array element to LogDestinationConfigs. Delete a log destination object by removing a single LogDestinationConfig array element from LogDestinationConfigs. Change the LogDestination setting in a single LogDestinationConfig array element. You can't change the LogDestinationType or LogType in a LogDestinationConfig. To change these settings, delete the existing LogDestinationConfig object and create a new one, using two separate calls to this update operation.

```sql
UPDATE aws.network_firewall.logging_configurations
SET 
FirewallArn = '{{ FirewallArn }}',
FirewallName = '{{ FirewallName }}',
LoggingConfiguration = '{{ LoggingConfiguration }}',
EnableMonitoringDashboard = {{ EnableMonitoringDashboard }}
WHERE 
region = '{{ region }}' --required
RETURNING
EnableMonitoringDashboard,
FirewallArn,
FirewallName,
LoggingConfiguration;
```
</TabItem>
</Tabs>
