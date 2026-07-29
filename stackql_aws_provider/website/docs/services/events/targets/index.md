--- 
title: targets
hide_title: false
hide_table_of_contents: false
keywords:
  - targets
  - events
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

Creates, updates, deletes, gets or lists a <code>targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.events.targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#remove_targets"><CopyableCode code="remove_targets" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Rule"><code>Rule</code></a>, <a href="#parameter-Ids"><code>Ids</code></a></td>
    <td></td>
    <td>Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked. A successful execution of RemoveTargets doesn't guarantee all targets are removed from the rule, it means that the target(s) listed in the request are removed. When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect. This action can partially fail if too many requests are made at the same time. If that happens, FailedEntryCount is non-zero in the response and each entry in FailedEntries provides the ID of the failed target and the error code. The maximum number of entries per request is 10.</td>
</tr>
<tr>
    <td><a href="#put_targets"><CopyableCode code="put_targets" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Rule"><code>Rule</code></a>, <a href="#parameter-Targets"><code>Targets</code></a></td>
    <td></td>
    <td>Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule. Targets are the resources that are invoked when a rule is triggered. The maximum number of entries per request is 10. Each rule can have up to five (5) targets associated with it at one time. For a list of services you can configure as targets for events, see EventBridge targets in the Amazon EventBridge User Guide . Creating rules with built-in targets is supported only in the Amazon Web Services Management Console. The built-in targets are: Amazon EBS CreateSnapshot API call Amazon EC2 RebootInstances API call Amazon EC2 StopInstances API call Amazon EC2 TerminateInstances API call For some target types, PutTargets provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the KinesisParameters argument. To invoke a command on multiple EC2 instances with one rule, you can use the RunCommandParameters field. To be able to make API calls against the resources that you own, Amazon EventBridge needs the appropriate permissions: For Lambda and Amazon SNS resources, EventBridge relies on resource-based policies. For EC2 instances, Kinesis Data Streams, Step Functions state machines and API Gateway APIs, EventBridge relies on IAM roles that you specify in the RoleARN argument in PutTargets. For more information, see Authentication and Access Control in the Amazon EventBridge User Guide . If another Amazon Web Services account is in the same region and has granted you permission (using PutPermission), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the Arn value when you run PutTargets. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see Amazon EventBridge Pricing. Input, InputPath, and InputTransformer are not available with PutTarget if the target is an event bus of a different Amazon Web Services account. If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a RoleArn with proper permissions in the Target structure. For more information, see Sending and Receiving Events Between Amazon Web Services Accounts in the Amazon EventBridge User Guide. If you have an IAM role on a cross-account event bus target, a PutTargets call without a role on the same target (same Id and Arn) will not remove the role. For more information about enabling cross-account events, see PutPermission. Input, InputPath, and InputTransformer are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event: If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target). If Input is specified in the form of valid JSON, then the matched event is overridden with this constant. If InputPath is specified in the form of JSONPath (for example, $.detail), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed). If InputTransformer is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target. When you specify InputPath or InputTransformer, you must use JSON dot notation, not bracket notation. When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect. This action can partially fail if too many requests are made at the same time. If that happens, FailedEntryCount is non-zero in the response and each entry in FailedEntries provides the ID of the failed target and the error code.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="remove_targets"
    values={[
        { label: 'remove_targets', value: 'remove_targets' }
    ]}
>
<TabItem value="remove_targets">

Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked. A successful execution of RemoveTargets doesn't guarantee all targets are removed from the rule, it means that the target(s) listed in the request are removed. When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect. This action can partially fail if too many requests are made at the same time. If that happens, FailedEntryCount is non-zero in the response and each entry in FailedEntries provides the ID of the failed target and the error code. The maximum number of entries per request is 10.

```sql
UPDATE aws.events.targets
SET 
Rule = '{{ Rule }}',
EventBusName = '{{ EventBusName }}',
Ids = '{{ Ids }}',
Force = {{ Force }}
WHERE 
region = '{{ region }}' --required
AND Rule = '{{ Rule }}' --required
AND Ids = '{{ Ids }}' --required
RETURNING
failed_entries,
failed_entry_count;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_targets"
    values={[
        { label: 'put_targets', value: 'put_targets' }
    ]}
>
<TabItem value="put_targets">

Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule. Targets are the resources that are invoked when a rule is triggered. The maximum number of entries per request is 10. Each rule can have up to five (5) targets associated with it at one time. For a list of services you can configure as targets for events, see EventBridge targets in the Amazon EventBridge User Guide . Creating rules with built-in targets is supported only in the Amazon Web Services Management Console. The built-in targets are: Amazon EBS CreateSnapshot API call Amazon EC2 RebootInstances API call Amazon EC2 StopInstances API call Amazon EC2 TerminateInstances API call For some target types, PutTargets provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the KinesisParameters argument. To invoke a command on multiple EC2 instances with one rule, you can use the RunCommandParameters field. To be able to make API calls against the resources that you own, Amazon EventBridge needs the appropriate permissions: For Lambda and Amazon SNS resources, EventBridge relies on resource-based policies. For EC2 instances, Kinesis Data Streams, Step Functions state machines and API Gateway APIs, EventBridge relies on IAM roles that you specify in the RoleARN argument in PutTargets. For more information, see Authentication and Access Control in the Amazon EventBridge User Guide . If another Amazon Web Services account is in the same region and has granted you permission (using PutPermission), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the Arn value when you run PutTargets. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see Amazon EventBridge Pricing. Input, InputPath, and InputTransformer are not available with PutTarget if the target is an event bus of a different Amazon Web Services account. If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a RoleArn with proper permissions in the Target structure. For more information, see Sending and Receiving Events Between Amazon Web Services Accounts in the Amazon EventBridge User Guide. If you have an IAM role on a cross-account event bus target, a PutTargets call without a role on the same target (same Id and Arn) will not remove the role. For more information about enabling cross-account events, see PutPermission. Input, InputPath, and InputTransformer are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event: If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target). If Input is specified in the form of valid JSON, then the matched event is overridden with this constant. If InputPath is specified in the form of JSONPath (for example, $.detail), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed). If InputTransformer is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target. When you specify InputPath or InputTransformer, you must use JSON dot notation, not bracket notation. When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect. This action can partially fail if too many requests are made at the same time. If that happens, FailedEntryCount is non-zero in the response and each entry in FailedEntries provides the ID of the failed target and the error code.

```sql
REPLACE aws.events.targets
SET 
Rule = '{{ Rule }}',
EventBusName = '{{ EventBusName }}',
Targets = '{{ Targets }}'
WHERE 
region = '{{ region }}' --required
AND Rule = '{{ Rule }}' --required
AND Targets = '{{ Targets }}' --required
RETURNING
failed_entries,
failed_entry_count;
```
</TabItem>
</Tabs>
