--- 
title: standards_control_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - standards_control_associations
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

Creates, updates, deletes, gets or lists a <code>standards_control_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="standards_control_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.standards_control_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_standards_control_associations"
    values={[
        { label: 'batch_get_standards_control_associations', value: 'batch_get_standards_control_associations' },
        { label: 'list_standards_control_associations', value: 'list_standards_control_associations' }
    ]}
>
<TabItem value="batch_get_standards_control_associations">

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
    <td><CopyableCode code="standards_control_association_details" /></td>
    <td><code>array</code></td>
    <td>Provides the enablement status of a security control in a specified standard and other details for the control in relation to the specified standard.</td>
</tr>
<tr>
    <td><CopyableCode code="unprocessed_associations" /></td>
    <td><code>array</code></td>
    <td>A security control (identified with SecurityControlId, SecurityControlArn, or a mix of both parameters) whose enablement status in a specified standard cannot be returned.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_standards_control_associations">

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
    <td><CopyableCode code="association_status" /></td>
    <td><code>string</code></td>
    <td>The enablement status of a control in a specific standard. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="related_requirements" /></td>
    <td><code>array</code></td>
    <td>The requirement that underlies this control in the compliance framework related to the standard.</td>
</tr>
<tr>
    <td><CopyableCode code="security_control_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a control, such as arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1. This parameter doesn't mention a specific standard. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_control_id" /></td>
    <td><code>string</code></td>
    <td>A unique standard-agnostic identifier for a control. Values for this field typically consist of an Amazon Web Services service and a number, such as APIGateway.5. This field doesn't reference a specific standard. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="standards_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a standard. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="standards_control_description" /></td>
    <td><code>string</code></td>
    <td>The description of a control. This typically summarizes how Security Hub CSPM evaluates the control and the conditions under which it produces a failed finding. The parameter may reference a specific standard. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="standards_control_title" /></td>
    <td><code>string</code></td>
    <td>The title of a control. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that a control's enablement status in a specified standard was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for updating a control's enablement status in a specified standard. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#batch_get_standards_control_associations"><CopyableCode code="batch_get_standards_control_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>For a batch of security controls and standards, identifies whether each control is currently enabled or disabled in a standard. Calls to this operation return a RESOURCE_NOT_FOUND_EXCEPTION error when the standard subscription for the association has a NOT_READY_FOR_UPDATES value for StandardsControlsUpdatable.</td>
</tr>
<tr>
    <td><a href="#list_standards_control_associations"><CopyableCode code="list_standards_control_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-SecurityControlId"><code>SecurityControlId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Specifies whether a control is currently enabled or disabled in each enabled standard in the calling account. This operation omits standards control associations for standard subscriptions where StandardsControlsUpdatable has value NOT_READY_FOR_UPDATES.</td>
</tr>
<tr>
    <td><a href="#batch_update_standards_control_associations"><CopyableCode code="batch_update_standards_control_associations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StandardsControlAssociationUpdates"><code>StandardsControlAssociationUpdates</code></a></td>
    <td></td>
    <td>For a batch of security controls and standards, this operation updates the enablement status of a control in a standard.</td>
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
    <td>The identifier of the control (identified with SecurityControlId, SecurityControlArn, or a mix of both parameters) that you want to determine the enablement status of in each enabled standard.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>An optional parameter that limits the total results of the API response to the specified number. If this parameter isn't provided in the request, the results include the first 25 standard and control associations. The results also include a NextToken parameter that you can use in a subsequent API call to get the next 25 associations. This repeats until all associations for the specified control are returned. The number of results is limited by the number of supported Security Hub CSPM standards that you've enabled in the calling account.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Optional pagination parameter.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_standards_control_associations"
    values={[
        { label: 'batch_get_standards_control_associations', value: 'batch_get_standards_control_associations' },
        { label: 'list_standards_control_associations', value: 'list_standards_control_associations' }
    ]}
>
<TabItem value="batch_get_standards_control_associations">

For a batch of security controls and standards, identifies whether each control is currently enabled or disabled in a standard. Calls to this operation return a RESOURCE_NOT_FOUND_EXCEPTION error when the standard subscription for the association has a NOT_READY_FOR_UPDATES value for StandardsControlsUpdatable.

```sql
SELECT
standards_control_association_details,
unprocessed_associations
FROM aws.securityhub.standards_control_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_standards_control_associations">

Specifies whether a control is currently enabled or disabled in each enabled standard in the calling account. This operation omits standards control associations for standard subscriptions where StandardsControlsUpdatable has value NOT_READY_FOR_UPDATES.

```sql
SELECT
association_status,
related_requirements,
security_control_arn,
security_control_id,
standards_arn,
standards_control_description,
standards_control_title,
updated_at,
updated_reason
FROM aws.securityhub.standards_control_associations
WHERE SecurityControlId = '{{ SecurityControlId }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_update_standards_control_associations"
    values={[
        { label: 'batch_update_standards_control_associations', value: 'batch_update_standards_control_associations' }
    ]}
>
<TabItem value="batch_update_standards_control_associations">

For a batch of security controls and standards, this operation updates the enablement status of a control in a standard.

```sql
EXEC aws.securityhub.standards_control_associations.batch_update_standards_control_associations 
@region='{{ region }}' --required 
@@json=
'{
"StandardsControlAssociationUpdates": "{{ StandardsControlAssociationUpdates }}"
}'
;
```
</TabItem>
</Tabs>
