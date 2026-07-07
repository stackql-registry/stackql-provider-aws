--- 
title: plan_execution_events
hide_title: false
hide_table_of_contents: false
keywords:
  - plan_execution_events
  - arc_region_switch
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

Creates, updates, deletes, gets or lists a <code>plan_execution_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="plan_execution_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.arc_region_switch.plan_execution_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_plan_execution_events"
    values={[
        { label: 'list_plan_execution_events', value: 'list_plan_execution_events' }
    ]}
>
<TabItem value="list_plan_execution_events">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for an execution event.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>Errors for an execution event.</td>
</tr>
<tr>
    <td><CopyableCode code="eventId" /></td>
    <td><code>string</code></td>
    <td>The event ID for an execution event.</td>
</tr>
<tr>
    <td><CopyableCode code="executionBlockType" /></td>
    <td><code>string</code></td>
    <td>The execution block type for an execution event. (CustomActionLambda, ManualApproval, AuroraGlobalDatabase, EC2AutoScaling, ARCRoutingControl, ARCRegionSwitchPlan, Parallel, ECSServiceScaling, EKSResourceScaling, Route53HealthCheck, DocumentDb, RdsPromoteReadReplica, RdsCreateCrossRegionReplica, LambdaEventSourceMapping)</td>
</tr>
<tr>
    <td><CopyableCode code="previousEventId" /></td>
    <td><code>string</code></td>
    <td>The event ID of the previous execution event.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>The resources for an execution event.</td>
</tr>
<tr>
    <td><CopyableCode code="stepName" /></td>
    <td><code>string</code></td>
    <td>The step name for an execution event.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for an execution event.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of an execution event. (unknown, executionPending, executionStarted, executionSucceeded, executionFailed, executionPausing, executionPaused, executionCanceling, executionCanceled, executionPendingApproval, executionBehaviorChangedToUngraceful, executionBehaviorChangedToGraceful, executionPendingChildPlanManualApproval, executionSuccessMonitoringApplicationHealth, stepStarted, stepUpdate, stepSucceeded, stepFailed, stepSkipped, stepPausedByError, stepPausedByOperator, stepCanceled, stepPendingApproval, stepExecutionBehaviorChangedToUngraceful, stepPendingApplicationHealthMonitor, planEvaluationWarning)</td>
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
    <td><a href="#list_plan_execution_events"><CopyableCode code="list_plan_execution_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the events that occurred during a plan execution. These events provide a detailed timeline of the execution process.</td>
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
    defaultValue="list_plan_execution_events"
    values={[
        { label: 'list_plan_execution_events', value: 'list_plan_execution_events' }
    ]}
>
<TabItem value="list_plan_execution_events">

Lists the events that occurred during a plan execution. These events provide a detailed timeline of the execution process.

```sql
SELECT
description,
error,
eventId,
executionBlockType,
previousEventId,
resources,
stepName,
timestamp,
type_
FROM aws.arc_region_switch.plan_execution_events
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
