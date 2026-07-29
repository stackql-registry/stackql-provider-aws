--- 
title: controls
hide_title: false
hide_table_of_contents: false
keywords:
  - controls
  - controlcatalog
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

Creates, updates, deletes, gets or lists a <code>controls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="controls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.controlcatalog.controls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_control"
    values={[
        { label: 'get_control', value: 'get_control' },
        { label: 'list_controls', value: 'list_controls' }
    ]}
>
<TabItem value="get_control">

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
    <td><CopyableCode code="aliases" /></td>
    <td><code>array</code></td>
    <td>A list of alternative identifiers for the control. These are human-readable designators, such as SH.S3.1. Several aliases can refer to the same control across different Amazon Web Services services or compliance frameworks.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the control. (pattern: &lt;code&gt;arn:(aws(?:&#91;-a-z&#93;*)?):(controlcatalog|controltower):&#91;a-zA-Z0-9-&#93;*::control/&#91;0-9a-zA-Z_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="behavior" /></td>
    <td><code>string</code></td>
    <td>A term that identifies the control's functional behavior. One of Preventive, Detective, Proactive (PREVENTIVE, PROACTIVE, DETECTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that notes the time when the control was released (start of its life) as a governance capability in Amazon Web Services.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of what the control does.</td>
</tr>
<tr>
    <td><CopyableCode code="governed_resources" /></td>
    <td><code>array</code></td>
    <td>A list of Amazon Web Services resource types that are governed by this control. This information helps you understand which controls can govern certain types of resources, and conversely, which resources are affected when the control is implemented. The resources are represented as Amazon Web Services CloudFormation resource types. If GovernedResources cannot be represented by available CloudFormation resource types, it’s returned as an empty list.</td>
</tr>
<tr>
    <td><CopyableCode code="implementation" /></td>
    <td><code>object</code></td>
    <td>Returns information about the control, as an ImplementationDetails object that shows the underlying implementation type for a control.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The display name of the control.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>array</code></td>
    <td>Returns an array of ControlParameter objects that specify the parameters a control supports. An empty list is returned for controls that don’t support parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="region_configuration" /></td>
    <td><code>object</code></td>
    <td>Returns information about the control, including the scope of the control, if enabled, and the Regions in which the control is available for deployment. For more information about scope, see Global services. If you are applying controls through an Amazon Web Services Control Tower landing zone environment, remember that the values returned in the RegionConfiguration API operation are not related to the governed Regions in your landing zone. For example, if you are governing Regions A,B,and C while the control is available in Regions A, B, C, and D, you'd see a response with DeployableRegions of A, B, C, and D for a control with REGIONAL scope, even though you may not intend to deploy the control in Region D, because you do not govern it through your landing zone.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>An enumerated type, with the following possible values: (LOW, MEDIUM, HIGH, CRITICAL)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_controls">

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
    <td><CopyableCode code="aliases" /></td>
    <td><code>array</code></td>
    <td>A list of alternative identifiers for the control. These are human-readable designators, such as SH.S3.1. Several aliases can refer to the same control across different Amazon Web Services services or compliance frameworks.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the control. (pattern: &lt;code&gt;arn:(aws(?:&#91;-a-z&#93;*)?):(controlcatalog|controltower):&#91;a-zA-Z0-9-&#93;*::control/&#91;0-9a-zA-Z_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="behavior" /></td>
    <td><code>string</code></td>
    <td>An enumerated type, with the following possible values: (PREVENTIVE, PROACTIVE, DETECTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that notes the time when the control was released (start of its life) as a governance capability in Amazon Web Services.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the control, as it may appear in the console. Describes the functionality of the control.</td>
</tr>
<tr>
    <td><CopyableCode code="governed_resources" /></td>
    <td><code>array</code></td>
    <td>A list of Amazon Web Services resource types that are governed by this control. This information helps you understand which controls can govern certain types of resources, and conversely, which resources are affected when the control is implemented. The resources are represented as Amazon Web Services CloudFormation resource types. If GovernedResources cannot be represented by available CloudFormation resource types, it’s returned as an empty list.</td>
</tr>
<tr>
    <td><CopyableCode code="implementation" /></td>
    <td><code>object</code></td>
    <td>An object of type ImplementationSummary that describes how the control is implemented.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The display name of the control.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>An enumerated type, with the following possible values: (LOW, MEDIUM, HIGH, CRITICAL)</td>
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
    <td><a href="#get_control"><CopyableCode code="get_control" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about a specific control, most notably a list of Amazon Web Services Regions where this control is supported. Input a value for the ControlArn parameter, in ARN form. GetControl accepts controltower or controlcatalog control ARNs as input. Returns a controlcatalog ARN format. In the API response, controls that have the value GLOBAL in the Scope field do not show the DeployableRegions field, because it does not apply. Controls that have the value REGIONAL in the Scope field return a value for the DeployableRegions field, as shown in the example.</td>
</tr>
<tr>
    <td><a href="#list_controls"><CopyableCode code="list_controls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a paginated list of all available controls in the Control Catalog library. Allows you to discover available controls. The list of controls is given as structures of type controlSummary. The ARN is returned in the global controlcatalog format, as shown in the examples.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results on a page or for an API request call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_control"
    values={[
        { label: 'get_control', value: 'get_control' },
        { label: 'list_controls', value: 'list_controls' }
    ]}
>
<TabItem value="get_control">

Returns details about a specific control, most notably a list of Amazon Web Services Regions where this control is supported. Input a value for the ControlArn parameter, in ARN form. GetControl accepts controltower or controlcatalog control ARNs as input. Returns a controlcatalog ARN format. In the API response, controls that have the value GLOBAL in the Scope field do not show the DeployableRegions field, because it does not apply. Controls that have the value REGIONAL in the Scope field return a value for the DeployableRegions field, as shown in the example.

```sql
SELECT
aliases,
arn,
behavior,
create_time,
description,
governed_resources,
implementation,
name,
parameters,
region_configuration,
severity
FROM aws.controlcatalog.controls
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_controls">

Returns a paginated list of all available controls in the Control Catalog library. Allows you to discover available controls. The list of controls is given as structures of type controlSummary. The ARN is returned in the global controlcatalog format, as shown in the examples.

```sql
SELECT
aliases,
arn,
behavior,
create_time,
description,
governed_resources,
implementation,
name,
severity
FROM aws.controlcatalog.controls
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
