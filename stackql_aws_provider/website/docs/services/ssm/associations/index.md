--- 
title: associations
hide_title: false
hide_table_of_contents: false
keywords:
  - associations
  - ssm
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

Creates, updates, deletes, gets or lists an <code>associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_association"
    values={[
        { label: 'describe_association', value: 'describe_association' },
        { label: 'list_associations', value: 'list_associations' }
    ]}
>
<TabItem value="describe_association">

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
    <td><CopyableCode code="alarm_configuration" /></td>
    <td><code>object</code></td>
    <td>The details for the CloudWatch alarm you want to apply to an automation or command.</td>
</tr>
<tr>
    <td><CopyableCode code="apply_only_at_cron_interval" /></td>
    <td><code>boolean</code></td>
    <td>By default, when you create a new associations, the system runs it immediately after it is created and then according to the schedule you specified. Specify this option if you don't want an association to run immediately after you create it. This parameter isn't supported for rate expressions.</td>
</tr>
<tr>
    <td><CopyableCode code="association_dispatch_assume_role" /></td>
    <td><code>string</code></td>
    <td>A role used by association to take actions on your behalf. State Manager will assume this role and call required APIs when dispatching configurations to nodes. If not specified, service-linked role for Systems Manager will be used by default. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The association ID. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_name" /></td>
    <td><code>string</code></td>
    <td>The association name. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_version" /></td>
    <td><code>string</code></td>
    <td>The association version. (pattern: &lt;code&gt;(&#91;$&#93;LATEST)|(&#91;1-9&#93;&#91;0-9&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="automation_target_parameter_name" /></td>
    <td><code>string</code></td>
    <td>Choose the parameter that will define how your automation will branch out. This target is required for associations that use an Automation runbook and target resources by using rate controls. Automation is a tool in Amazon Web Services Systems Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="calendar_names" /></td>
    <td><code>array</code></td>
    <td>The names or Amazon Resource Names (ARNs) of the Change Calendar type documents your associations are gated under. The associations only run when that change calendar is open. For more information, see Amazon Web Services Systems Manager Change Calendar in the Amazon Web Services Systems Manager User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="compliance_severity" /></td>
    <td><code>string</code></td>
    <td>The severity level that is assigned to the association. (CRITICAL, HIGH, MEDIUM, LOW, UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the association was made.</td>
</tr>
<tr>
    <td><CopyableCode code="document_version" /></td>
    <td><code>string</code></td>
    <td>The document version. (pattern: &lt;code&gt;(&#91;$&#93;LATEST|&#91;$&#93;DEFAULT|^&#91;1-9&#93;&#91;0-9&#93;*$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The number of hours that an association can run on specified targets. After the resulting cutoff time passes, associations that are currently running are cancelled, and no pending executions are started on remaining targets.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The managed node ID. (pattern: &lt;code&gt;(^i-(\w&#123;8&#125;|\w&#123;17&#125;)$)|(^mi-\w&#123;17&#125;$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_execution_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date on which the association was last run.</td>
</tr>
<tr>
    <td><CopyableCode code="last_successful_execution_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last date on which the association was successfully run.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_association_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the association was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="max_concurrency" /></td>
    <td><code>string</code></td>
    <td>The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time. If a new managed node starts and attempts to run an association while Systems Manager is running MaxConcurrency associations, the association is allowed to run. During the next association interval, the new managed node will process its association within the limit specified for MaxConcurrency. (pattern: &lt;code&gt;^(&#91;1-9&#93;&#91;0-9&#93;*|&#91;1-9&#93;&#91;0-9&#93;%|&#91;1-9&#93;%|100%)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="max_errors" /></td>
    <td><code>string</code></td>
    <td>The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 managed nodes and set MaxError to 10%, then the system stops sending the request when the sixth error is received. Executions that are already running an association when MaxErrors is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one at a time. (pattern: &lt;code&gt;^(&#91;1-9&#93;&#91;0-9&#93;*|&#91;0&#93;|&#91;1-9&#93;&#91;0-9&#93;%|&#91;0-9&#93;%|100%)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the SSM document. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.:/&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_location" /></td>
    <td><code>object</code></td>
    <td>An S3 bucket where you want to store the output details of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="overview" /></td>
    <td><code>object</code></td>
    <td>Information about the association.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>A description of the parameters for a document.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_expression" /></td>
    <td><code>string</code></td>
    <td>A cron expression that specifies a schedule when the association runs.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_offset" /></td>
    <td><code>integer</code></td>
    <td>Number of days to wait after the scheduled day to run an association.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The association status.</td>
</tr>
<tr>
    <td><CopyableCode code="sync_compliance" /></td>
    <td><code>string</code></td>
    <td>The mode for generating association compliance. You can specify AUTO or MANUAL. In AUTO mode, the system uses the status of the association execution to determine the compliance status. If the association execution runs successfully, then the association is COMPLIANT. If the association execution doesn't run successfully, the association is NON-COMPLIANT. In MANUAL mode, you must specify the AssociationId as a parameter for the PutComplianceItems API operation. In this case, compliance data isn't managed by State Manager, a tool in Amazon Web Services Systems Manager. It is managed by your direct call to the PutComplianceItems API operation. By default, all associations use AUTO mode. (AUTO, MANUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="target_locations" /></td>
    <td><code>array</code></td>
    <td>The combination of Amazon Web Services Regions and Amazon Web Services accounts where you want to run the association.</td>
</tr>
<tr>
    <td><CopyableCode code="target_maps" /></td>
    <td><code>array</code></td>
    <td>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>array</code></td>
    <td>The managed nodes targeted by the request.</td>
</tr>
<tr>
    <td><CopyableCode code="triggered_alarms" /></td>
    <td><code>array</code></td>
    <td>The CloudWatch alarm that was invoked during the association.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_associations">

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
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The ID created by the system when you create an association. An association is a binding between a document and a set of targets with a schedule. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_name" /></td>
    <td><code>string</code></td>
    <td>The association name. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_version" /></td>
    <td><code>string</code></td>
    <td>The association version. (pattern: &lt;code&gt;(&#91;$&#93;LATEST)|(&#91;1-9&#93;&#91;0-9&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="document_version" /></td>
    <td><code>string</code></td>
    <td>The version of the document used in the association. If you change a document version for a State Manager association, Systems Manager immediately runs the association unless you previously specifed the apply-only-at-cron-interval parameter. State Manager doesn't support running associations that use a new version of a document if that document is shared from another account. State Manager always runs the default version of a document if shared from another account, even though the Systems Manager console shows that a new version was processed. If you want to run an association using a new version of a document shared form another account, you must set the document version to default. (pattern: &lt;code&gt;(&#91;$&#93;LATEST|&#91;$&#93;DEFAULT|^&#91;1-9&#93;&#91;0-9&#93;*$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The number of hours that an association can run on specified targets. After the resulting cutoff time passes, associations that are currently running are cancelled, and no pending executions are started on remaining targets.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The managed node ID. (pattern: &lt;code&gt;(^i-(\w&#123;8&#125;|\w&#123;17&#125;)$)|(^mi-\w&#123;17&#125;$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_execution_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date on which the association was last run.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the SSM document. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.:/&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="overview" /></td>
    <td><code>object</code></td>
    <td>Information about the association.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_expression" /></td>
    <td><code>string</code></td>
    <td>A cron expression that specifies a schedule when the association runs. The schedule runs in Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_offset" /></td>
    <td><code>integer</code></td>
    <td>Number of days to wait after the scheduled day to run an association.</td>
</tr>
<tr>
    <td><CopyableCode code="target_maps" /></td>
    <td><code>array</code></td>
    <td>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>array</code></td>
    <td>The managed nodes targeted by the request to create an association. You can target all managed nodes in an Amazon Web Services account by specifying the InstanceIds key with a value of *.</td>
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
    <td><a href="#describe_association"><CopyableCode code="describe_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the association for the specified target or managed node. If you created the association by using the Targets parameter, then you must retrieve the association by using the association ID.</td>
</tr>
<tr>
    <td><a href="#list_associations"><CopyableCode code="list_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns all State Manager associations in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results to a specific State Manager association document or managed node by specifying a filter. State Manager is a tool in Amazon Web Services Systems Manager.</td>
</tr>
<tr>
    <td><a href="#create_association_batch"><CopyableCode code="create_association_batch" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Entries"><code>Entries</code></a></td>
    <td></td>
    <td>Associates the specified Amazon Web Services Systems Manager document (SSM document) with the specified managed nodes or targets. When you associate a document with one or more managed nodes using IDs or tags, Amazon Web Services Systems Manager Agent (SSM Agent) running on the managed node processes the document and configures the node as specified. If you associate a document with a managed node that already has an associated document, the system returns the AssociationAlreadyExists exception.</td>
</tr>
<tr>
    <td><a href="#create_association"><CopyableCode code="create_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A State Manager association defines the state that you want to maintain on your managed nodes. For example, an association can specify that anti-virus software must be installed and running on your managed nodes, or that certain ports must be closed. For static targets, the association specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an Amazon Web Services resource group or an Amazon Web Services autoscaling group, State Manager, a tool in Amazon Web Services Systems Manager applies the configuration when new managed nodes are added to the group. The association also specifies actions to take when applying the configuration. For example, an association for anti-virus software might run once a day. If the software isn't installed, then State Manager installs it. If the software is installed, but the service isn't running, then the association might instruct State Manager to start the service.</td>
</tr>
<tr>
    <td><a href="#update_association_status"><CopyableCode code="update_association_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-AssociationStatus"><code>AssociationStatus</code></a></td>
    <td></td>
    <td>Updates the status of the Amazon Web Services Systems Manager document (SSM document) associated with the specified managed node. UpdateAssociationStatus is primarily used by the Amazon Web Services Systems Manager Agent (SSM Agent) to report status updates about your associations and is only used for associations created with the InstanceId legacy parameter.</td>
</tr>
<tr>
    <td><a href="#update_association"><CopyableCode code="update_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AssociationId"><code>AssociationId</code></a></td>
    <td></td>
    <td>Updates an association. You can update the association name and version, the document version, schedule, parameters, and Amazon Simple Storage Service (Amazon S3) output. When you call UpdateAssociation, the system removes all optional parameters from the request and overwrites the association with null values for those parameters. This is by design. You must specify all optional parameters in the call, even if you are not changing the parameters. This includes the Name parameter. Before calling this API action, we recommend that you call the DescribeAssociation API operation and make a note of all optional parameters required for your UpdateAssociation call. In order to call this API operation, a user, group, or role must be granted permission to call the DescribeAssociation API operation. If you don't have permission to call DescribeAssociation, then you receive the following error: An error occurred (AccessDeniedException) when calling the UpdateAssociation operation: User: <code>&lt;user_arn&gt;</code> isn't authorized to perform: ssm:DescribeAssociation on resource: <code>&lt;resource_arn&gt;</code> When you update an association, the association immediately runs against the specified targets. You can add the ApplyOnlyAtCronInterval parameter to run the association during the next schedule run.</td>
</tr>
<tr>
    <td><a href="#delete_association"><CopyableCode code="delete_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates the specified Amazon Web Services Systems Manager document (SSM document) from the specified managed node. If you created the association by using the Targets parameter, then you must delete the association by using the association ID. When you disassociate a document from a managed node, it doesn't change the configuration of the node. To change the configuration state of a managed node after you disassociate a document, you must create a new document with the desired configuration and associate it with the node.</td>
</tr>
<tr>
    <td><a href="#start_associations_once"><CopyableCode code="start_associations_once" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AssociationIds"><code>AssociationIds</code></a></td>
    <td></td>
    <td>Runs an association immediately and only one time. This operation can be helpful when troubleshooting associations.</td>
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
    defaultValue="describe_association"
    values={[
        { label: 'describe_association', value: 'describe_association' },
        { label: 'list_associations', value: 'list_associations' }
    ]}
>
<TabItem value="describe_association">

Describes the association for the specified target or managed node. If you created the association by using the Targets parameter, then you must retrieve the association by using the association ID.

```sql
SELECT
alarm_configuration,
apply_only_at_cron_interval,
association_dispatch_assume_role,
association_id,
association_name,
association_version,
automation_target_parameter_name,
calendar_names,
compliance_severity,
date,
document_version,
duration,
instance_id,
last_execution_date,
last_successful_execution_date,
last_update_association_date,
max_concurrency,
max_errors,
name,
output_location,
overview,
parameters,
schedule_expression,
schedule_offset,
status,
sync_compliance,
target_locations,
target_maps,
targets,
triggered_alarms
FROM aws.ssm.associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_associations">

Returns all State Manager associations in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results to a specific State Manager association document or managed node by specifying a filter. State Manager is a tool in Amazon Web Services Systems Manager.

```sql
SELECT
association_id,
association_name,
association_version,
document_version,
duration,
instance_id,
last_execution_date,
name,
overview,
schedule_expression,
schedule_offset,
target_maps,
targets
FROM aws.ssm.associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_association_batch"
    values={[
        { label: 'create_association_batch', value: 'create_association_batch' },
        { label: 'create_association', value: 'create_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_association_batch">

Associates the specified Amazon Web Services Systems Manager document (SSM document) with the specified managed nodes or targets. When you associate a document with one or more managed nodes using IDs or tags, Amazon Web Services Systems Manager Agent (SSM Agent) running on the managed node processes the document and configures the node as specified. If you associate a document with a managed node that already has an associated document, the system returns the AssociationAlreadyExists exception.

```sql
INSERT INTO aws.ssm.associations (
Entries,
AssociationDispatchAssumeRole,
region
)
SELECT 
'{{ Entries }}' /* required */,
'{{ AssociationDispatchAssumeRole }}',
'{{ region }}'
RETURNING
failed,
successful
;
```
</TabItem>
<TabItem value="create_association">

A State Manager association defines the state that you want to maintain on your managed nodes. For example, an association can specify that anti-virus software must be installed and running on your managed nodes, or that certain ports must be closed. For static targets, the association specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an Amazon Web Services resource group or an Amazon Web Services autoscaling group, State Manager, a tool in Amazon Web Services Systems Manager applies the configuration when new managed nodes are added to the group. The association also specifies actions to take when applying the configuration. For example, an association for anti-virus software might run once a day. If the software isn't installed, then State Manager installs it. If the software is installed, but the service isn't running, then the association might instruct State Manager to start the service.

```sql
INSERT INTO aws.ssm.associations (
Name,
DocumentVersion,
InstanceId,
Parameters,
Targets,
ScheduleExpression,
OutputLocation,
AssociationName,
AutomationTargetParameterName,
MaxErrors,
MaxConcurrency,
ComplianceSeverity,
SyncCompliance,
ApplyOnlyAtCronInterval,
CalendarNames,
TargetLocations,
ScheduleOffset,
Duration,
TargetMaps,
Tags,
AlarmConfiguration,
AssociationDispatchAssumeRole,
region
)
SELECT 
'{{ Name }}',
'{{ DocumentVersion }}',
'{{ InstanceId }}',
'{{ Parameters }}',
'{{ Targets }}',
'{{ ScheduleExpression }}',
'{{ OutputLocation }}',
'{{ AssociationName }}',
'{{ AutomationTargetParameterName }}',
'{{ MaxErrors }}',
'{{ MaxConcurrency }}',
'{{ ComplianceSeverity }}',
'{{ SyncCompliance }}',
{{ ApplyOnlyAtCronInterval }},
'{{ CalendarNames }}',
'{{ TargetLocations }}',
{{ ScheduleOffset }},
{{ Duration }},
'{{ TargetMaps }}',
'{{ Tags }}',
'{{ AlarmConfiguration }}',
'{{ AssociationDispatchAssumeRole }}',
'{{ region }}'
RETURNING
association_description
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: associations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the associations resource.
    - name: Entries
      description: |
        One or more associations.
      value:
        - Name: "{{ Name }}"
          InstanceId: "{{ InstanceId }}"
          Parameters: "{{ Parameters }}"
          AutomationTargetParameterName: "{{ AutomationTargetParameterName }}"
          DocumentVersion: "{{ DocumentVersion }}"
          Targets: "{{ Targets }}"
          ScheduleExpression: "{{ ScheduleExpression }}"
          OutputLocation:
            S3Location:
              OutputS3Region: "{{ OutputS3Region }}"
              OutputS3BucketName: "{{ OutputS3BucketName }}"
              OutputS3KeyPrefix: "{{ OutputS3KeyPrefix }}"
          AssociationName: "{{ AssociationName }}"
          MaxErrors: "{{ MaxErrors }}"
          MaxConcurrency: "{{ MaxConcurrency }}"
          ComplianceSeverity: "{{ ComplianceSeverity }}"
          SyncCompliance: "{{ SyncCompliance }}"
          ApplyOnlyAtCronInterval: {{ ApplyOnlyAtCronInterval }}
          CalendarNames: "{{ CalendarNames }}"
          TargetLocations: "{{ TargetLocations }}"
          ScheduleOffset: {{ ScheduleOffset }}
          Duration: {{ Duration }}
          TargetMaps: "{{ TargetMaps }}"
          AlarmConfiguration:
            IgnorePollAlarmFailure: {{ IgnorePollAlarmFailure }}
            Alarms:
              - Name: "{{ Name }}"
    - name: AssociationDispatchAssumeRole
      value: "{{ AssociationDispatchAssumeRole }}"
      description: |
        A role used by association to take actions on your behalf. State Manager will assume this role and call required APIs when dispatching configurations to nodes. If not specified, service-linked role for Systems Manager will be used by default. It is recommended that you define a custom IAM role so that you have full control of the permissions that State Manager has when taking actions on your behalf. Service-linked role support in State Manager is being phased out. Associations relying on service-linked role may require updates in the future to continue functioning properly.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the SSM Command document or Automation runbook that contains the configuration information for the managed node. You can specify Amazon Web Services-predefined documents, documents you created, or a document that is shared with you from another Amazon Web Services account. For Systems Manager documents (SSM documents) that are shared with you from other Amazon Web Services accounts, you must specify the complete SSM document ARN, in the following format: arn:partition:ssm:region:account-id:document/document-name For example: arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document For Amazon Web Services-predefined documents and SSM documents you created in your account, you only need to specify the document name. For example, AWS-ApplyPatchBaseline or My-Document.
    - name: DocumentVersion
      value: "{{ DocumentVersion }}"
      description: |
        The document version you want to associate with the targets. Can be a specific version or the default version. State Manager doesn't support running associations that use a new version of a document if that document is shared from another account. State Manager always runs the default version of a document if shared from another account, even though the Systems Manager console shows that a new version was processed. If you want to run an association using a new version of a document shared form another account, you must set the document version to default.
    - name: InstanceId
      value: "{{ InstanceId }}"
      description: |
        The managed node ID. InstanceId has been deprecated. To specify a managed node ID for an association, use the Targets parameter. Requests that include the parameter InstanceID with Systems Manager documents (SSM documents) that use schema version 2.0 or later will fail. In addition, if you use the parameter InstanceId, you can't use the parameters AssociationName, DocumentVersion, MaxErrors, MaxConcurrency, OutputLocation, or ScheduleExpression. To use these parameters, you must use the Targets parameter.
    - name: Parameters
      value: "{{ Parameters }}"
      description: |
        The parameters for the runtime configuration of the document.
    - name: Targets
      description: |
        The targets for the association. You can target managed nodes by using tags, Amazon Web Services resource groups, all managed nodes in an Amazon Web Services account, or individual managed node IDs. You can target all managed nodes in an Amazon Web Services account by specifying the InstanceIds key with a value of *. For more information about choosing targets for an association, see Understanding targets and rate controls in State Manager associations in the Amazon Web Services Systems Manager User Guide.
      value:
        - Key: "{{ Key }}"
          Values: "{{ Values }}"
    - name: ScheduleExpression
      value: "{{ ScheduleExpression }}"
      description: |
        A cron expression when the association will be applied to the targets.
    - name: OutputLocation
      description: |
        An Amazon Simple Storage Service (Amazon S3) bucket where you want to store the output details of the request.
      value:
        S3Location:
          OutputS3Region: "{{ OutputS3Region }}"
          OutputS3BucketName: "{{ OutputS3BucketName }}"
          OutputS3KeyPrefix: "{{ OutputS3KeyPrefix }}"
    - name: AssociationName
      value: "{{ AssociationName }}"
      description: |
        Specify a descriptive name for the association.
    - name: AutomationTargetParameterName
      value: "{{ AutomationTargetParameterName }}"
      description: |
        Choose the parameter that will define how your automation will branch out. This target is required for associations that use an Automation runbook and target resources by using rate controls. Automation is a tool in Amazon Web Services Systems Manager.
    - name: MaxErrors
      value: "{{ MaxErrors }}"
      description: |
        The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 managed nodes and set MaxError to 10%, then the system stops sending the request when the sixth error is received. Executions that are already running an association when MaxErrors is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one at a time.
    - name: MaxConcurrency
      value: "{{ MaxConcurrency }}"
      description: |
        The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time. If a new managed node starts and attempts to run an association while Systems Manager is running MaxConcurrency associations, the association is allowed to run. During the next association interval, the new managed node will process its association within the limit specified for MaxConcurrency.
    - name: ComplianceSeverity
      value: "{{ ComplianceSeverity }}"
      description: |
        The severity level to assign to the association.
      valid_values: ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW', 'UNSPECIFIED']
    - name: SyncCompliance
      value: "{{ SyncCompliance }}"
      description: |
        The mode for generating association compliance. You can specify AUTO or MANUAL. In AUTO mode, the system uses the status of the association execution to determine the compliance status. If the association execution runs successfully, then the association is COMPLIANT. If the association execution doesn't run successfully, the association is NON-COMPLIANT. In MANUAL mode, you must specify the AssociationId as a parameter for the PutComplianceItems API operation. In this case, compliance data isn't managed by State Manager. It is managed by your direct call to the PutComplianceItems API operation. By default, all associations use AUTO mode.
      valid_values: ['AUTO', 'MANUAL']
    - name: ApplyOnlyAtCronInterval
      value: {{ ApplyOnlyAtCronInterval }}
      description: |
        By default, when you create a new association, the system runs it immediately after it is created and then according to the schedule you specified and when target changes are detected. Specify true for ApplyOnlyAtCronIntervalif you want the association to run only according to the schedule you specified. For more information, see Understanding when associations are applied to resources and >About target updates with Automation runbooks in the Amazon Web Services Systems Manager User Guide. This parameter isn't supported for rate expressions.
    - name: CalendarNames
      value:
        - "{{ CalendarNames }}"
      description: |
        The names of Amazon Resource Names (ARNs) of the Change Calendar type documents you want to gate your associations under. The associations only run when that change calendar is open. For more information, see Amazon Web Services Systems Manager Change Calendar in the Amazon Web Services Systems Manager User Guide.
    - name: TargetLocations
      description: |
        A location is a combination of Amazon Web Services Regions and Amazon Web Services accounts where you want to run the association. Use this action to create an association in multiple Regions and multiple accounts. The IncludeChildOrganizationUnits parameter is not supported by State Manager.
      value:
        - Accounts: "{{ Accounts }}"
          Regions: "{{ Regions }}"
          TargetLocationMaxConcurrency: "{{ TargetLocationMaxConcurrency }}"
          TargetLocationMaxErrors: "{{ TargetLocationMaxErrors }}"
          ExecutionRoleName: "{{ ExecutionRoleName }}"
          TargetLocationAlarmConfiguration:
            IgnorePollAlarmFailure: {{ IgnorePollAlarmFailure }}
            Alarms:
              - Name: "{{ Name }}"
          IncludeChildOrganizationUnits: {{ IncludeChildOrganizationUnits }}
          ExcludeAccounts: "{{ ExcludeAccounts }}"
          Targets: "{{ Targets }}"
          TargetsMaxConcurrency: "{{ TargetsMaxConcurrency }}"
          TargetsMaxErrors: "{{ TargetsMaxErrors }}"
    - name: ScheduleOffset
      value: {{ ScheduleOffset }}
      description: |
        Number of days to wait after the scheduled day to run an association. For example, if you specified a cron schedule of cron(0 0 ? * THU#2 *), you could specify an offset of 3 to run the association each Sunday after the second Thursday of the month. For more information about cron schedules for associations, see Reference: Cron and rate expressions for Systems Manager in the Amazon Web Services Systems Manager User Guide. To use offsets, you must specify the ApplyOnlyAtCronInterval parameter. This option tells the system not to run an association immediately after you create it.
    - name: Duration
      value: {{ Duration }}
      description: |
        The number of hours the association can run before it is canceled. Duration applies to associations that are currently running, and any pending and in progress commands on all targets. If a target was taken offline for the association to run, it is made available again immediately, without a reboot. The Duration parameter applies only when both these conditions are true: The association for which you specify a duration is cancelable according to the parameters of the SSM command document or Automation runbook associated with this execution. The command specifies the ApplyOnlyAtCronInterval parameter, which means that the association doesn't run immediately after it is created, but only according to the specified schedule.
    - name: TargetMaps
      value: "{{ TargetMaps }}"
      description: |
        A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.
    - name: Tags
      description: |
        Adds or overwrites one or more tags for a State Manager association. Tags are metadata that you can assign to your Amazon Web Services resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: AlarmConfiguration
      description: |
        The details for the CloudWatch alarm you want to apply to an automation or command.
      value:
        IgnorePollAlarmFailure: {{ IgnorePollAlarmFailure }}
        Alarms:
          - Name: "{{ Name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_association_status"
    values={[
        { label: 'update_association_status', value: 'update_association_status' },
        { label: 'update_association', value: 'update_association' }
    ]}
>
<TabItem value="update_association_status">

Updates the status of the Amazon Web Services Systems Manager document (SSM document) associated with the specified managed node. UpdateAssociationStatus is primarily used by the Amazon Web Services Systems Manager Agent (SSM Agent) to report status updates about your associations and is only used for associations created with the InstanceId legacy parameter.

```sql
UPDATE aws.ssm.associations
SET 
Name = '{{ Name }}',
InstanceId = '{{ InstanceId }}',
AssociationStatus = '{{ AssociationStatus }}'
WHERE 
region = '{{ region }}' --required
AND InstanceId = '{{ InstanceId }}' --required
AND AssociationStatus = '{{ AssociationStatus }}' --required
RETURNING
association_description;
```
</TabItem>
<TabItem value="update_association">

Updates an association. You can update the association name and version, the document version, schedule, parameters, and Amazon Simple Storage Service (Amazon S3) output. When you call UpdateAssociation, the system removes all optional parameters from the request and overwrites the association with null values for those parameters. This is by design. You must specify all optional parameters in the call, even if you are not changing the parameters. This includes the Name parameter. Before calling this API action, we recommend that you call the DescribeAssociation API operation and make a note of all optional parameters required for your UpdateAssociation call. In order to call this API operation, a user, group, or role must be granted permission to call the DescribeAssociation API operation. If you don't have permission to call DescribeAssociation, then you receive the following error: An error occurred (AccessDeniedException) when calling the UpdateAssociation operation: User: <code>&lt;user_arn&gt;</code> isn't authorized to perform: ssm:DescribeAssociation on resource: <code>&lt;resource_arn&gt;</code> When you update an association, the association immediately runs against the specified targets. You can add the ApplyOnlyAtCronInterval parameter to run the association during the next schedule run.

```sql
UPDATE aws.ssm.associations
SET 
AssociationId = '{{ AssociationId }}',
Parameters = '{{ Parameters }}',
DocumentVersion = '{{ DocumentVersion }}',
ScheduleExpression = '{{ ScheduleExpression }}',
OutputLocation = '{{ OutputLocation }}',
Name = '{{ Name }}',
Targets = '{{ Targets }}',
AssociationName = '{{ AssociationName }}',
AssociationVersion = '{{ AssociationVersion }}',
AutomationTargetParameterName = '{{ AutomationTargetParameterName }}',
MaxErrors = '{{ MaxErrors }}',
MaxConcurrency = '{{ MaxConcurrency }}',
ComplianceSeverity = '{{ ComplianceSeverity }}',
SyncCompliance = '{{ SyncCompliance }}',
ApplyOnlyAtCronInterval = {{ ApplyOnlyAtCronInterval }},
CalendarNames = '{{ CalendarNames }}',
TargetLocations = '{{ TargetLocations }}',
ScheduleOffset = {{ ScheduleOffset }},
Duration = {{ Duration }},
TargetMaps = '{{ TargetMaps }}',
AlarmConfiguration = '{{ AlarmConfiguration }}',
AssociationDispatchAssumeRole = '{{ AssociationDispatchAssumeRole }}'
WHERE 
region = '{{ region }}' --required
AND AssociationId = '{{ AssociationId }}' --required
RETURNING
association_description;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_association"
    values={[
        { label: 'delete_association', value: 'delete_association' }
    ]}
>
<TabItem value="delete_association">

Disassociates the specified Amazon Web Services Systems Manager document (SSM document) from the specified managed node. If you created the association by using the Targets parameter, then you must delete the association by using the association ID. When you disassociate a document from a managed node, it doesn't change the configuration of the node. To change the configuration state of a managed node after you disassociate a document, you must create a new document with the desired configuration and associate it with the node.

```sql
DELETE FROM aws.ssm.associations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_associations_once"
    values={[
        { label: 'start_associations_once', value: 'start_associations_once' }
    ]}
>
<TabItem value="start_associations_once">

Runs an association immediately and only one time. This operation can be helpful when troubleshooting associations.

```sql
EXEC aws.ssm.associations.start_associations_once 
@region='{{ region }}' --required 
@@json=
'{
"AssociationIds": "{{ AssociationIds }}"
}'
;
```
</TabItem>
</Tabs>
