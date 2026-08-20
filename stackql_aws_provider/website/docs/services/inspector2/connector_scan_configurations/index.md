--- 
title: connector_scan_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - connector_scan_configurations
  - inspector2
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

Creates, updates, deletes, gets or lists a <code>connector_scan_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connector_scan_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.connector_scan_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_connector_scan_configurations"
    values={[
        { label: 'list_connector_scan_configurations', value: 'list_connector_scan_configurations' }
    ]}
>
<TabItem value="list_connector_scan_configurations">

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
    <td><CopyableCode code="aws_config_connector_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Amazon Web Services Config connector. (pattern: &lt;code&gt;arn:(&#91;^:&#93;+):config:(&#91;^:&#93;+):(&#91;^:&#93;+):connector/(&#91;^/&#93;+)/(&#91;^/&#93;+)/(&#91;^/:\s&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_arns" /></td>
    <td><code>array</code></td>
    <td>The list of connector ARNs associated with this Amazon Web Services Config connector.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_configuration" /></td>
    <td><code>object</code></td>
    <td>The scan configuration settings.</td>
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
    <td><a href="#list_connector_scan_configurations"><CopyableCode code="list_connector_scan_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists scan configurations for Amazon Web Services Config connectors. Results are paginated. Use the nextToken parameter to retrieve the next page of results.</td>
</tr>
<tr>
    <td><a href="#update_connector_scan_configuration"><CopyableCode code="update_connector_scan_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-awsConfigConnectorArn"><code>awsConfigConnectorArn</code></a>, <a href="#parameter-scanConfiguration"><code>scanConfiguration</code></a></td>
    <td></td>
    <td>Updates scan configuration settings for resources associated with an Amazon Web Services Config connector.</td>
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
    defaultValue="list_connector_scan_configurations"
    values={[
        { label: 'list_connector_scan_configurations', value: 'list_connector_scan_configurations' }
    ]}
>
<TabItem value="list_connector_scan_configurations">

Lists scan configurations for Amazon Web Services Config connectors. Results are paginated. Use the nextToken parameter to retrieve the next page of results.

```sql
SELECT
aws_config_connector_arn,
connector_arns,
scan_configuration
FROM aws.inspector2.connector_scan_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connector_scan_configuration"
    values={[
        { label: 'update_connector_scan_configuration', value: 'update_connector_scan_configuration' }
    ]}
>
<TabItem value="update_connector_scan_configuration">

Updates scan configuration settings for resources associated with an Amazon Web Services Config connector.

```sql
UPDATE aws.inspector2.connector_scan_configurations
SET 
awsConfigConnectorArn = '{{ awsConfigConnectorArn }}',
scanConfiguration = '{{ scanConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND awsConfigConnectorArn = '{{ awsConfigConnectorArn }}' --required
AND scanConfiguration = '{{ scanConfiguration }}' --required;
```
</TabItem>
</Tabs>
