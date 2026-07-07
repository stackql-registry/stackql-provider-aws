--- 
title: configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - configurations
  - discovery
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

Creates, updates, deletes, gets or lists a <code>configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.discovery.configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_configurations"
    values={[
        { label: 'describe_configurations', value: 'describe_configurations' },
        { label: 'list_configurations', value: 'list_configurations' }
    ]}
>
<TabItem value="describe_configurations">

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
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>A key in the response map. The value is an array of data.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configurations">

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
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Returns configuration details, including the configuration ID, attribute names, and attribute values.</td>
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
    <td><a href="#describe_configurations"><CopyableCode code="describe_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves attributes for a list of configuration item IDs. All of the supplied IDs must be for the same asset type from one of the following: server application process connection Output fields are specific to the asset type specified. For example, the output for a server configuration item includes a list of attributes about the server, such as host name, operating system, number of network cards, etc. For a complete list of outputs for each asset type, see Using the DescribeConfigurations Action in the Amazon Web Services Application Discovery Service User Guide.</td>
</tr>
<tr>
    <td><a href="#list_configurations"><CopyableCode code="list_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of configuration items as specified by the value passed to the required parameter configurationType. Optional filtering may be applied to refine search results.</td>
</tr>
<tr>
    <td><a href="#associate_configuration_items_to_application"><CopyableCode code="associate_configuration_items_to_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-applicationConfigurationId"><code>applicationConfigurationId</code></a>, <a href="#parameter-configurationIds"><code>configurationIds</code></a></td>
    <td></td>
    <td>Associates one or more configuration items with an application.</td>
</tr>
<tr>
    <td><a href="#disassociate_configuration_items_from_application"><CopyableCode code="disassociate_configuration_items_from_application" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-applicationConfigurationId"><code>applicationConfigurationId</code></a>, <a href="#parameter-configurationIds"><code>configurationIds</code></a></td>
    <td></td>
    <td>Disassociates one or more configuration items from an application.</td>
</tr>
<tr>
    <td><a href="#export_configurations"><CopyableCode code="export_configurations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deprecated. Use StartExportTask instead. Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID that you can query using the DescribeExportConfigurations API. The system imposes a limit of two configuration exports in six hours.</td>
</tr>
<tr>
    <td><a href="#start_batch_delete_configuration_task"><CopyableCode code="start_batch_delete_configuration_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configurationType"><code>configurationType</code></a>, <a href="#parameter-configurationIds"><code>configurationIds</code></a></td>
    <td></td>
    <td>Takes a list of configurationId as input and starts an asynchronous deletion task to remove the configurationItems. Returns a unique deletion task identifier.</td>
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
    defaultValue="describe_configurations"
    values={[
        { label: 'describe_configurations', value: 'describe_configurations' },
        { label: 'list_configurations', value: 'list_configurations' }
    ]}
>
<TabItem value="describe_configurations">

Retrieves attributes for a list of configuration item IDs. All of the supplied IDs must be for the same asset type from one of the following: server application process connection Output fields are specific to the asset type specified. For example, the output for a server configuration item includes a list of attributes about the server, such as host name, operating system, number of network cards, etc. For a complete list of outputs for each asset type, see Using the DescribeConfigurations Action in the Amazon Web Services Application Discovery Service User Guide.

```sql
SELECT
configuration
FROM aws.discovery.configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configurations">

Retrieves a list of configuration items as specified by the value passed to the required parameter configurationType. Optional filtering may be applied to refine search results.

```sql
SELECT
configuration
FROM aws.discovery.configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_configuration_items_to_application"
    values={[
        { label: 'associate_configuration_items_to_application', value: 'associate_configuration_items_to_application' }
    ]}
>
<TabItem value="associate_configuration_items_to_application">

Associates one or more configuration items with an application.

```sql
UPDATE aws.discovery.configurations
SET 
applicationConfigurationId = '{{ applicationConfigurationId }}',
configurationIds = '{{ configurationIds }}'
WHERE 
region = '{{ region }}' --required
AND applicationConfigurationId = '{{ applicationConfigurationId }}' --required
AND configurationIds = '{{ configurationIds }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_configuration_items_from_application"
    values={[
        { label: 'disassociate_configuration_items_from_application', value: 'disassociate_configuration_items_from_application' },
        { label: 'export_configurations', value: 'export_configurations' },
        { label: 'start_batch_delete_configuration_task', value: 'start_batch_delete_configuration_task' }
    ]}
>
<TabItem value="disassociate_configuration_items_from_application">

Disassociates one or more configuration items from an application.

```sql
EXEC aws.discovery.configurations.disassociate_configuration_items_from_application 
@region='{{ region }}' --required 
@@json=
'{
"applicationConfigurationId": "{{ applicationConfigurationId }}", 
"configurationIds": "{{ configurationIds }}"
}'
;
```
</TabItem>
<TabItem value="export_configurations">

Deprecated. Use StartExportTask instead. Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID that you can query using the DescribeExportConfigurations API. The system imposes a limit of two configuration exports in six hours.

```sql
EXEC aws.discovery.configurations.export_configurations 
@region='{{ region }}' --required 
;
```
</TabItem>
<TabItem value="start_batch_delete_configuration_task">

Takes a list of configurationId as input and starts an asynchronous deletion task to remove the configurationItems. Returns a unique deletion task identifier.

```sql
EXEC aws.discovery.configurations.start_batch_delete_configuration_task 
@region='{{ region }}' --required 
@@json=
'{
"configurationType": "{{ configurationType }}", 
"configurationIds": "{{ configurationIds }}"
}'
;
```
</TabItem>
</Tabs>
