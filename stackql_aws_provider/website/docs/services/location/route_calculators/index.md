--- 
title: route_calculators
hide_title: false
hide_table_of_contents: false
keywords:
  - route_calculators
  - location
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

Creates, updates, deletes, gets or lists a <code>route_calculators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="route_calculators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.route_calculators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_route_calculator"
    values={[
        { label: 'describe_route_calculator', value: 'describe_route_calculator' },
        { label: 'list_route_calculators', value: 'list_route_calculators' }
    ]}
>
<TabItem value="describe_route_calculator">

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
    <td><CopyableCode code="calculator_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the Route calculator resource. Use the ARN when you specify a resource across Amazon Web Services. Format example: arn:aws:geo:region:account-id:route-calculator/ExampleCalculator (pattern: &lt;code&gt;arn(:&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*):geo(:(&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*))(:&#91;0-9&#93;+):((\*)|(&#91;-a-z&#93;+&#91;/&#93;&#91;*-._\w&#93;+))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="calculator_name" /></td>
    <td><code>string</code></td>
    <td>The name of the route calculator resource being described. (pattern: &lt;code&gt;&#91;-._\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the route calculator resource was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. For example, 2020–07-2T12:15:20.000Z+01:00</td>
</tr>
<tr>
    <td><CopyableCode code="data_source" /></td>
    <td><code>string</code></td>
    <td>The data provider of traffic and road network data. Indicates one of the available providers: Esri Grab Here For more information about data providers, see Amazon Location Service data providers.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The optional description of the route calculator resource.</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_plan" /></td>
    <td><code>string</code></td>
    <td>Always returns RequestBasedUsage. (RequestBasedUsage, MobileAssetTracking, MobileAssetManagement)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with route calculator resource.</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the route calculator resource was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. For example, 2020–07-2T12:15:20.000Z+01:00</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_route_calculators">

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
    <td><CopyableCode code="calculator_name" /></td>
    <td><code>string</code></td>
    <td>The name of the route calculator resource. (pattern: &lt;code&gt;&#91;-._\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the route calculator resource was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. For example, 2020–07-2T12:15:20.000Z+01:00</td>
</tr>
<tr>
    <td><CopyableCode code="data_source" /></td>
    <td><code>string</code></td>
    <td>The data provider of traffic and road network data. Indicates one of the available providers: Esri Grab Here For more information about data providers, see Amazon Location Service data providers.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The optional description of the route calculator resource.</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_plan" /></td>
    <td><code>string</code></td>
    <td>Always returns RequestBasedUsage. (RequestBasedUsage, MobileAssetTracking, MobileAssetManagement)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the route calculator resource was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. For example, 2020–07-2T12:15:20.000Z+01:00</td>
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
    <td><a href="#describe_route_calculator"><CopyableCode code="describe_route_calculator" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-calculator_name"><code>calculator_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Routes API V2 unless you require Grab data. DescribeRouteCalculator is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Routes API version 2 has a simplified interface that can be used without creating or managing route calculator resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location. Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Routes V2 API Reference or the Developer Guide. Retrieves the route calculator resource details.</td>
</tr>
<tr>
    <td><a href="#list_route_calculators"><CopyableCode code="list_route_calculators" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Routes API V2 unless you require Grab data. ListRouteCalculators is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Routes API version 2 has a simplified interface that can be used without creating or managing route calculator resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location. Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Routes V2 API Reference or the Developer Guide. Lists route calculator resources in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_route_calculator"><CopyableCode code="create_route_calculator" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CalculatorName"><code>CalculatorName</code></a>, <a href="#parameter-DataSource"><code>DataSource</code></a></td>
    <td></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Routes API V2 unless you require Grab data. CreateRouteCalculator is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Routes API version 2 has a simplified interface that can be used without creating or managing route calculator resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location. Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Routes V2 API Reference or the Developer Guide. Creates a route calculator resource in your Amazon Web Services account. You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider. If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the Amazon Web Services service terms for more details.</td>
</tr>
<tr>
    <td><a href="#update_route_calculator"><CopyableCode code="update_route_calculator" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-calculator_name"><code>calculator_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Routes API V2 unless you require Grab data. UpdateRouteCalculator is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Routes API version 2 has a simplified interface that can be used without creating or managing route calculator resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location. Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Routes V2 API Reference or the Developer Guide. Updates the specified properties for a given route calculator resource.</td>
</tr>
<tr>
    <td><a href="#delete_route_calculator"><CopyableCode code="delete_route_calculator" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-calculator_name"><code>calculator_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Routes API V2 unless you require Grab data. DeleteRouteCalculator is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Routes API version 2 has a simplified interface that can be used without creating or managing route calculator resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location. Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Routes V2 API Reference or the Developer Guide. Deletes a route calculator resource from your Amazon Web Services account. This operation deletes the resource permanently.</td>
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
<tr id="parameter-calculator_name">
    <td><CopyableCode code="calculator_name" /></td>
    <td><code>string</code></td>
    <td>The name of the route calculator resource to be deleted.</td>
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
    defaultValue="describe_route_calculator"
    values={[
        { label: 'describe_route_calculator', value: 'describe_route_calculator' },
        { label: 'list_route_calculators', value: 'list_route_calculators' }
    ]}
>
<TabItem value="describe_route_calculator">

This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Routes API V2 unless you require Grab data. DescribeRouteCalculator is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Routes API version 2 has a simplified interface that can be used without creating or managing route calculator resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location. Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Routes V2 API Reference or the Developer Guide. Retrieves the route calculator resource details.

```sql
SELECT
calculator_arn,
calculator_name,
create_time,
data_source,
description,
pricing_plan,
tags,
update_time
FROM aws.location.route_calculators
WHERE calculator_name = '{{ calculator_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_route_calculators">

This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Routes API V2 unless you require Grab data. ListRouteCalculators is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Routes API version 2 has a simplified interface that can be used without creating or managing route calculator resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location. Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Routes V2 API Reference or the Developer Guide. Lists route calculator resources in your Amazon Web Services account.

```sql
SELECT
calculator_name,
create_time,
data_source,
description,
pricing_plan,
update_time
FROM aws.location.route_calculators
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_route_calculator"
    values={[
        { label: 'create_route_calculator', value: 'create_route_calculator' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_route_calculator">

This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Routes API V2 unless you require Grab data. CreateRouteCalculator is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Routes API version 2 has a simplified interface that can be used without creating or managing route calculator resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location. Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Routes V2 API Reference or the Developer Guide. Creates a route calculator resource in your Amazon Web Services account. You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider. If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the Amazon Web Services service terms for more details.

```sql
INSERT INTO aws.location.route_calculators (
CalculatorName,
DataSource,
PricingPlan,
Description,
Tags,
region
)
SELECT 
'{{ CalculatorName }}' /* required */,
'{{ DataSource }}' /* required */,
'{{ PricingPlan }}',
'{{ Description }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
calculator_arn,
calculator_name,
create_time
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: route_calculators
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the route_calculators resource.
    - name: CalculatorName
      value: "{{ CalculatorName }}"
    - name: DataSource
      value: "{{ DataSource }}"
    - name: PricingPlan
      value: "{{ PricingPlan }}"
      valid_values: ['RequestBasedUsage', 'MobileAssetTracking', 'MobileAssetManagement']
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_route_calculator"
    values={[
        { label: 'update_route_calculator', value: 'update_route_calculator' }
    ]}
>
<TabItem value="update_route_calculator">

This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Routes API V2 unless you require Grab data. UpdateRouteCalculator is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Routes API version 2 has a simplified interface that can be used without creating or managing route calculator resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location. Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Routes V2 API Reference or the Developer Guide. Updates the specified properties for a given route calculator resource.

```sql
UPDATE aws.location.route_calculators
SET 
PricingPlan = '{{ PricingPlan }}',
Description = '{{ Description }}'
WHERE 
calculator_name = '{{ calculator_name }}' --required
AND region = '{{ region }}' --required
RETURNING
calculator_arn,
calculator_name,
update_time;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_route_calculator"
    values={[
        { label: 'delete_route_calculator', value: 'delete_route_calculator' }
    ]}
>
<TabItem value="delete_route_calculator">

This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Routes API V2 unless you require Grab data. DeleteRouteCalculator is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Routes API version 2 has a simplified interface that can be used without creating or managing route calculator resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location. Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Routes V2 API Reference or the Developer Guide. Deletes a route calculator resource from your Amazon Web Services account. This operation deletes the resource permanently.

```sql
DELETE FROM aws.location.route_calculators
WHERE calculator_name = '{{ calculator_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
