--- 
title: association_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - association_versions
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

Creates, updates, deletes, gets or lists an <code>association_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="association_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.association_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_association_versions"
    values={[
        { label: 'list_association_versions', value: 'list_association_versions' }
    ]}
>
<TabItem value="list_association_versions">

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
    <td><CopyableCode code="ApplyOnlyAtCronInterval" /></td>
    <td><code>boolean</code></td>
    <td>By default, when you create new associations, the system runs it immediately after it is created and then according to the schedule you specified. Specify this option if you don't want an association to run immediately after you create it. This parameter isn't supported for rate expressions.</td>
</tr>
<tr>
    <td><CopyableCode code="AssociationDispatchAssumeRole" /></td>
    <td><code>string</code></td>
    <td>A role used by association to take actions on your behalf. State Manager will assume this role and call required APIs when dispatching configurations to nodes. If not specified, service-linked role for Systems Manager will be used by default. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AssociationId" /></td>
    <td><code>string</code></td>
    <td>The ID created by the system when the association was created. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AssociationName" /></td>
    <td><code>string</code></td>
    <td>The name specified for the association version when the association version was created. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AssociationVersion" /></td>
    <td><code>string</code></td>
    <td>The association version. (pattern: &lt;code&gt;(&#91;$&#93;LATEST)|(&#91;1-9&#93;&#91;0-9&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CalendarNames" /></td>
    <td><code>array</code></td>
    <td>The names or Amazon Resource Names (ARNs) of the Change Calendar type documents your associations are gated under. The associations for this version only run when that Change Calendar is open. For more information, see Amazon Web Services Systems Manager Change Calendar in the Amazon Web Services Systems Manager User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="ComplianceSeverity" /></td>
    <td><code>string</code></td>
    <td>The severity level that is assigned to the association. (CRITICAL, HIGH, MEDIUM, LOW, UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the association version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DocumentVersion" /></td>
    <td><code>string</code></td>
    <td>The version of an Amazon Web Services Systems Manager document (SSM document) used when the association version was created. (pattern: &lt;code&gt;(&#91;$&#93;LATEST|&#91;$&#93;DEFAULT|^&#91;1-9&#93;&#91;0-9&#93;*$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Duration" /></td>
    <td><code>integer</code></td>
    <td>The number of hours that an association can run on specified targets. After the resulting cutoff time passes, associations that are currently running are cancelled, and no pending executions are started on remaining targets.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxConcurrency" /></td>
    <td><code>string</code></td>
    <td>The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time. If a new managed node starts and attempts to run an association while Systems Manager is running MaxConcurrency associations, the association is allowed to run. During the next association interval, the new managed node will process its association within the limit specified for MaxConcurrency. (pattern: &lt;code&gt;^(&#91;1-9&#93;&#91;0-9&#93;*|&#91;1-9&#93;&#91;0-9&#93;%|&#91;1-9&#93;%|100%)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MaxErrors" /></td>
    <td><code>string</code></td>
    <td>The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 managed nodes and set MaxError to 10%, then the system stops sending the request when the sixth error is received. Executions that are already running an association when MaxErrors is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one at a time. (pattern: &lt;code&gt;^(&#91;1-9&#93;&#91;0-9&#93;*|&#91;0&#93;|&#91;1-9&#93;&#91;0-9&#93;%|&#91;0-9&#93;%|100%)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name specified when the association was created. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.:/&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OutputLocation" /></td>
    <td><code>object</code></td>
    <td>The location in Amazon S3 specified for the association when the association version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Parameters" /></td>
    <td><code>object</code></td>
    <td>Parameters specified when the association version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleExpression" /></td>
    <td><code>string</code></td>
    <td>The cron or rate schedule specified for the association when the association version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleOffset" /></td>
    <td><code>integer</code></td>
    <td>Number of days to wait after the scheduled day to run an association.</td>
</tr>
<tr>
    <td><CopyableCode code="SyncCompliance" /></td>
    <td><code>string</code></td>
    <td>The mode for generating association compliance. You can specify AUTO or MANUAL. In AUTO mode, the system uses the status of the association execution to determine the compliance status. If the association execution runs successfully, then the association is COMPLIANT. If the association execution doesn't run successfully, the association is NON-COMPLIANT. In MANUAL mode, you must specify the AssociationId as a parameter for the PutComplianceItems API operation. In this case, compliance data isn't managed by State Manager, a tool in Amazon Web Services Systems Manager. It is managed by your direct call to the PutComplianceItems API operation. By default, all associations use AUTO mode. (AUTO, MANUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="TargetLocations" /></td>
    <td><code>array</code></td>
    <td>The combination of Amazon Web Services Regions and Amazon Web Services accounts where you wanted to run the association when this association version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetMaps" /></td>
    <td><code>array</code></td>
    <td>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.</td>
</tr>
<tr>
    <td><CopyableCode code="Targets" /></td>
    <td><code>array</code></td>
    <td>The targets specified for the association when the association version was created.</td>
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
    <td><a href="#list_association_versions"><CopyableCode code="list_association_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves all versions of an association for a specific association ID.</td>
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
    defaultValue="list_association_versions"
    values={[
        { label: 'list_association_versions', value: 'list_association_versions' }
    ]}
>
<TabItem value="list_association_versions">

Retrieves all versions of an association for a specific association ID.

```sql
SELECT
ApplyOnlyAtCronInterval,
AssociationDispatchAssumeRole,
AssociationId,
AssociationName,
AssociationVersion,
CalendarNames,
ComplianceSeverity,
CreatedDate,
DocumentVersion,
Duration,
MaxConcurrency,
MaxErrors,
Name,
OutputLocation,
Parameters,
ScheduleExpression,
ScheduleOffset,
SyncCompliance,
TargetLocations,
TargetMaps,
Targets
FROM aws.ssm.association_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
