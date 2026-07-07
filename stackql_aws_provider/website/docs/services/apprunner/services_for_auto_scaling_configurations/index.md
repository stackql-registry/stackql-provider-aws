--- 
title: services_for_auto_scaling_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - services_for_auto_scaling_configurations
  - apprunner
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

Creates, updates, deletes, gets or lists a <code>services_for_auto_scaling_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services_for_auto_scaling_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apprunner.services_for_auto_scaling_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_services_for_auto_scaling_configuration"
    values={[
        { label: 'list_services_for_auto_scaling_configuration', value: 'list_services_for_auto_scaling_configuration' }
    ]}
>
<TabItem value="list_services_for_auto_scaling_configuration">

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
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>A list of service ARN records. In a paginated request, the request returns up to MaxResults records for each call.</td>
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
    <td><a href="#list_services_for_auto_scaling_configuration"><CopyableCode code="list_services_for_auto_scaling_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the associated App Runner services using an auto scaling configuration.</td>
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
    defaultValue="list_services_for_auto_scaling_configuration"
    values={[
        { label: 'list_services_for_auto_scaling_configuration', value: 'list_services_for_auto_scaling_configuration' }
    ]}
>
<TabItem value="list_services_for_auto_scaling_configuration">

Returns a list of the associated App Runner services using an auto scaling configuration.

```sql
SELECT
service_arn
FROM aws.apprunner.services_for_auto_scaling_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
