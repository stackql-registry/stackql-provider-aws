--- 
title: security_control_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - security_control_definitions
  - securityhub
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

Creates, updates, deletes, gets or lists a <code>security_control_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_control_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.security_control_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_security_control_definition"
    values={[
        { label: 'get_security_control_definition', value: 'get_security_control_definition' },
        { label: 'list_security_control_definitions', value: 'list_security_control_definitions' }
    ]}
>
<TabItem value="get_security_control_definition">

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
    <td><CopyableCode code="current_region_availability" /></td>
    <td><code>string</code></td>
    <td>Specifies whether a security control is available in the current Amazon Web Services Region. (AVAILABLE, UNAVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="customizable_properties" /></td>
    <td><code>array</code></td>
    <td>Security control properties that you can customize. Currently, only parameter customization is supported for select controls. An empty array is returned for controls that don’t support custom properties.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of a security control across standards. This typically summarizes how Security Hub CSPM evaluates the control and the conditions under which it produces a failed finding. This parameter doesn't reference a specific standard. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parameter_definitions" /></td>
    <td><code>object</code></td>
    <td>An object that provides a security control parameter name, description, and the options for customizing it. This object is excluded for a control that doesn't support custom parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The cloud provider whose resources the security control evaluates. For example, AWS or Azure. (AWS, Azure)</td>
</tr>
<tr>
    <td><CopyableCode code="remediation_url" /></td>
    <td><code>string</code></td>
    <td>A link to Security Hub CSPM documentation that explains how to remediate a failed finding for a security control. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_control_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a security control across standards. Values for this field typically consist of an Amazon Web Services service name and a number (for example, APIGateway.3). This parameter differs from SecurityControlArn, which is a unique Amazon Resource Name (ARN) assigned to a control. The ARN references the security control ID (for example, arn:aws:securityhub:eu-central-1:123456789012:security-control/APIGateway.3). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="severity_rating" /></td>
    <td><code>string</code></td>
    <td>The severity of a security control. For more information about how Security Hub CSPM determines control severity, see Assigning severity to control findings in the Security Hub CSPM User Guide. (LOW, MEDIUM, HIGH, CRITICAL)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title of a security control. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_control_definitions">

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
    <td><CopyableCode code="current_region_availability" /></td>
    <td><code>string</code></td>
    <td>Specifies whether a security control is available in the current Amazon Web Services Region. (AVAILABLE, UNAVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="customizable_properties" /></td>
    <td><code>array</code></td>
    <td>Security control properties that you can customize. Currently, only parameter customization is supported for select controls. An empty array is returned for controls that don’t support custom properties.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of a security control across standards. This typically summarizes how Security Hub CSPM evaluates the control and the conditions under which it produces a failed finding. This parameter doesn't reference a specific standard. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parameter_definitions" /></td>
    <td><code>object</code></td>
    <td>An object that provides a security control parameter name, description, and the options for customizing it. This object is excluded for a control that doesn't support custom parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The cloud provider whose resources the security control evaluates. For example, AWS or Azure. (AWS, Azure)</td>
</tr>
<tr>
    <td><CopyableCode code="remediation_url" /></td>
    <td><code>string</code></td>
    <td>A link to Security Hub CSPM documentation that explains how to remediate a failed finding for a security control. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_control_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a security control across standards. Values for this field typically consist of an Amazon Web Services service name and a number (for example, APIGateway.3). This parameter differs from SecurityControlArn, which is a unique Amazon Resource Name (ARN) assigned to a control. The ARN references the security control ID (for example, arn:aws:securityhub:eu-central-1:123456789012:security-control/APIGateway.3). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="severity_rating" /></td>
    <td><code>string</code></td>
    <td>The severity of a security control. For more information about how Security Hub CSPM determines control severity, see Assigning severity to control findings in the Security Hub CSPM User Guide. (LOW, MEDIUM, HIGH, CRITICAL)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title of a security control. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_security_control_definition"><CopyableCode code="get_security_control_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-SecurityControlId"><code>SecurityControlId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the definition of a security control. The definition includes the control title, description, Region availability, parameter definitions, and other details.</td>
</tr>
<tr>
    <td><a href="#list_security_control_definitions"><CopyableCode code="list_security_control_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-StandardsArn"><code>StandardsArn</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Providers"><code>Providers</code></a></td>
    <td>Lists all of the security controls that apply to a specified standard.</td>
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
<tr id="parameter-SecurityControlId">
    <td><CopyableCode code="SecurityControlId" /></td>
    <td><code>string</code></td>
    <td>The ID of the security control to retrieve the definition for. This field doesn’t accept an Amazon Resource Name (ARN).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>An optional parameter that limits the total results of the API response to the specified number. If this parameter isn't provided in the request, the results include the first 25 security controls that apply to the specified standard. The results also include a NextToken parameter that you can use in a subsequent API call to get the next 25 controls. This repeats until all controls for the standard are returned.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Optional pagination parameter.</td>
</tr>
<tr id="parameter-Providers">
    <td><CopyableCode code="Providers" /></td>
    <td><code>array</code></td>
    <td>A list of cloud providers to filter the security control definitions by. For example, specify Azure to return only controls that evaluate Azure resources.</td>
</tr>
<tr id="parameter-StandardsArn">
    <td><CopyableCode code="StandardsArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the standard that you want to view controls for.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_security_control_definition"
    values={[
        { label: 'get_security_control_definition', value: 'get_security_control_definition' },
        { label: 'list_security_control_definitions', value: 'list_security_control_definitions' }
    ]}
>
<TabItem value="get_security_control_definition">

Retrieves the definition of a security control. The definition includes the control title, description, Region availability, parameter definitions, and other details.

```sql
SELECT
current_region_availability,
customizable_properties,
description,
parameter_definitions,
provider,
remediation_url,
security_control_id,
severity_rating,
title
FROM aws.securityhub.security_control_definitions
WHERE SecurityControlId = '{{ SecurityControlId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_security_control_definitions">

Lists all of the security controls that apply to a specified standard.

```sql
SELECT
current_region_availability,
customizable_properties,
description,
parameter_definitions,
provider,
remediation_url,
security_control_id,
severity_rating,
title
FROM aws.securityhub.security_control_definitions
WHERE region = '{{ region }}' -- required
AND StandardsArn = '{{ StandardsArn }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND Providers = '{{ Providers }}'
;
```
</TabItem>
</Tabs>
