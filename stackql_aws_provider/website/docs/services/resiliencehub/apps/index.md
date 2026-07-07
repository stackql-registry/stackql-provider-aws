--- 
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
  - resiliencehub
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

Creates, updates, deletes, gets or lists an <code>apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehub.apps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_app"
    values={[
        { label: 'describe_app', value: 'describe_app' },
        { label: 'list_apps', value: 'list_apps' }
    ]}
>
<TabItem value="describe_app">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name for the application. (pattern: &lt;code&gt;^&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_\-&#93;&#123;1,59&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="appArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assessmentSchedule" /></td>
    <td><code>string</code></td>
    <td>Assessment execution schedule with 'Daily' or 'Disabled' values. (Disabled, Daily)</td>
</tr>
<tr>
    <td><CopyableCode code="awsApplicationArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of Resource Groups group that is integrated with an AppRegistry application. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="complianceStatus" /></td>
    <td><code>string</code></td>
    <td>Current status of compliance for the resiliency policy. (PolicyBreached, PolicyMet, NotAssessed, ChangesDetected, NotApplicable, MissingPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when the application was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional description for an application.</td>
</tr>
<tr>
    <td><CopyableCode code="driftStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates if compliance drifts (deviations) were detected while running an assessment for your application. (NotChecked, NotDetected, Detected)</td>
</tr>
<tr>
    <td><CopyableCode code="eventSubscriptions" /></td>
    <td><code>array</code></td>
    <td>The list of events you would like to subscribe and get notification for. Currently, Resilience Hub supports notifications only for Drift detected and Scheduled assessment failure events.</td>
</tr>
<tr>
    <td><CopyableCode code="lastAppComplianceEvaluationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the most recent compliance evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="lastDriftEvaluationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the last time that a drift was evaluated.</td>
</tr>
<tr>
    <td><CopyableCode code="lastResiliencyScoreEvaluationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the most recent resiliency score evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="permissionModel" /></td>
    <td><code>object</code></td>
    <td>Defines the roles and credentials that Resilience Hub would use while creating the application, importing its resources, and running an assessment.</td>
</tr>
<tr>
    <td><CopyableCode code="policyArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:partition:resiliencehub:region:account:resiliency-policy/policy-id. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resiliencyScore" /></td>
    <td><code>number (double)</code></td>
    <td>Current resiliency score for the application.</td>
</tr>
<tr>
    <td><CopyableCode code="rpoInSecs" /></td>
    <td><code>integer</code></td>
    <td>Recovery Point Objective (RPO) in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="rtoInSecs" /></td>
    <td><code>integer</code></td>
    <td>Recovery Time Objective (RTO) in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the application. (Active, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_apps">

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
    <td><CopyableCode code="appSummaries" /></td>
    <td><code>array</code></td>
    <td>Summaries for the Resilience Hub application.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Token for the next set of results, or null if there are no more results. (pattern: &lt;code&gt;^\S&#123;1,2000&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_app"><CopyableCode code="describe_app" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an Resilience Hub application.</td>
</tr>
<tr>
    <td><a href="#list_apps"><CopyableCode code="list_apps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-appArn"><code>appArn</code></a>, <a href="#parameter-awsApplicationArn"><code>awsApplicationArn</code></a>, <a href="#parameter-fromLastAssessmentTime"><code>fromLastAssessmentTime</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-reverseOrder"><code>reverseOrder</code></a>, <a href="#parameter-toLastAssessmentTime"><code>toLastAssessmentTime</code></a></td>
    <td>Lists your Resilience Hub applications. You can filter applications using only one filter at a time or without using any filter. If you try to filter applications using multiple filters, you will get the following error: An error occurred (ValidationException) when calling the ListApps operation: Only one filter is supported for this operation.</td>
</tr>
<tr>
    <td><a href="#create_app"><CopyableCode code="create_app" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates an Resilience Hub application. An Resilience Hub application is a collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a Resilience Hub application, you provide an application name, resources from one or more CloudFormation stacks, Resource Groups, Terraform state files, AppRegistry applications, and an appropriate resiliency policy. In addition, you can also add resources that are located on Amazon Elastic Kubernetes Service (Amazon EKS) clusters as optional resources. For more information about the number of resources supported per application, see Service quotas. After you create an Resilience Hub application, you publish it so that you can run a resiliency assessment on it. You can then use recommendations from the assessment to improve resiliency by running another assessment, comparing results, and then iterating the process until you achieve your goals for recovery time objective (RTO) and recovery point objective (RPO).</td>
</tr>
<tr>
    <td><a href="#update_app"><CopyableCode code="update_app" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appArn"><code>appArn</code></a></td>
    <td></td>
    <td>Updates an application.</td>
</tr>
<tr>
    <td><a href="#delete_app"><CopyableCode code="delete_app" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Resilience Hub application. This is a destructive action that can't be undone.</td>
</tr>
<tr>
    <td><a href="#batch_update_recommendation_status"><CopyableCode code="batch_update_recommendation_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appArn"><code>appArn</code></a>, <a href="#parameter-requestEntries"><code>requestEntries</code></a></td>
    <td></td>
    <td>Enables you to include or exclude one or more operational recommendations.</td>
</tr>
<tr>
    <td><a href="#import_resources_to_draft_app_version"><CopyableCode code="import_resources_to_draft_app_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appArn"><code>appArn</code></a></td>
    <td></td>
    <td>Imports resources to Resilience Hub application draft version from different input sources. For more information about the input sources supported by Resilience Hub, see Discover the structure and describe your Resilience Hub application.</td>
</tr>
<tr>
    <td><a href="#publish_app_version"><CopyableCode code="publish_app_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appArn"><code>appArn</code></a></td>
    <td></td>
    <td>Publishes a new version of a specific Resilience Hub application.</td>
</tr>
<tr>
    <td><a href="#start_app_assessment"><CopyableCode code="start_app_assessment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appArn"><code>appArn</code></a>, <a href="#parameter-appVersion"><code>appVersion</code></a>, <a href="#parameter-assessmentName"><code>assessmentName</code></a></td>
    <td></td>
    <td>Creates a new application assessment for an application.</td>
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
<tr id="parameter-appArn">
    <td><CopyableCode code="appArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide.</td>
</tr>
<tr id="parameter-awsApplicationArn">
    <td><CopyableCode code="awsApplicationArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of Resource Groups group that is integrated with an AppRegistry application. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide.</td>
</tr>
<tr id="parameter-fromLastAssessmentTime">
    <td><CopyableCode code="fromLastAssessmentTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Lower limit of the range that is used to filter applications based on their last assessment times.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the one of the listed applications.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Null, or the token from a previous call to get the next set of results.</td>
</tr>
<tr id="parameter-reverseOrder">
    <td><CopyableCode code="reverseOrder" /></td>
    <td><code>boolean</code></td>
    <td>The application list is sorted based on the values of lastAppComplianceEvaluationTime field. By default, application list is sorted in ascending order. To sort the application list in descending order, set this field to True.</td>
</tr>
<tr id="parameter-toLastAssessmentTime">
    <td><CopyableCode code="toLastAssessmentTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Upper limit of the range that is used to filter the applications based on their last assessment times.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_app"
    values={[
        { label: 'describe_app', value: 'describe_app' },
        { label: 'list_apps', value: 'list_apps' }
    ]}
>
<TabItem value="describe_app">

Describes an Resilience Hub application.

```sql
SELECT
name,
appArn,
assessmentSchedule,
awsApplicationArn,
complianceStatus,
creationTime,
description,
driftStatus,
eventSubscriptions,
lastAppComplianceEvaluationTime,
lastDriftEvaluationTime,
lastResiliencyScoreEvaluationTime,
permissionModel,
policyArn,
resiliencyScore,
rpoInSecs,
rtoInSecs,
status,
tags
FROM aws.resiliencehub.apps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_apps">

Lists your Resilience Hub applications. You can filter applications using only one filter at a time or without using any filter. If you try to filter applications using multiple filters, you will get the following error: An error occurred (ValidationException) when calling the ListApps operation: Only one filter is supported for this operation.

```sql
SELECT
appSummaries,
nextToken
FROM aws.resiliencehub.apps
WHERE region = '{{ region }}' -- required
AND appArn = '{{ appArn }}'
AND awsApplicationArn = '{{ awsApplicationArn }}'
AND fromLastAssessmentTime = '{{ fromLastAssessmentTime }}'
AND maxResults = '{{ maxResults }}'
AND name = '{{ name }}'
AND nextToken = '{{ nextToken }}'
AND reverseOrder = '{{ reverseOrder }}'
AND toLastAssessmentTime = '{{ toLastAssessmentTime }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_app"
    values={[
        { label: 'create_app', value: 'create_app' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_app">

Creates an Resilience Hub application. An Resilience Hub application is a collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a Resilience Hub application, you provide an application name, resources from one or more CloudFormation stacks, Resource Groups, Terraform state files, AppRegistry applications, and an appropriate resiliency policy. In addition, you can also add resources that are located on Amazon Elastic Kubernetes Service (Amazon EKS) clusters as optional resources. For more information about the number of resources supported per application, see Service quotas. After you create an Resilience Hub application, you publish it so that you can run a resiliency assessment on it. You can then use recommendations from the assessment to improve resiliency by running another assessment, comparing results, and then iterating the process until you achieve your goals for recovery time objective (RTO) and recovery point objective (RPO).

```sql
INSERT INTO aws.resiliencehub.apps (
assessmentSchedule,
awsApplicationArn,
clientToken,
description,
eventSubscriptions,
name,
permissionModel,
policyArn,
tags,
region
)
SELECT 
'{{ assessmentSchedule }}',
'{{ awsApplicationArn }}',
'{{ clientToken }}',
'{{ description }}',
'{{ eventSubscriptions }}',
'{{ name }}' /* required */,
'{{ permissionModel }}',
'{{ policyArn }}',
'{{ tags }}',
'{{ region }}'
RETURNING
app
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: apps
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the apps resource.
    - name: assessmentSchedule
      value: "{{ assessmentSchedule }}"
      valid_values: ['Disabled', 'Daily']
    - name: awsApplicationArn
      value: "{{ awsApplicationArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: description
      value: "{{ description }}"
    - name: eventSubscriptions
      value:
        - eventType: "{{ eventType }}"
          name: "{{ name }}"
          snsTopicArn: "{{ snsTopicArn }}"
    - name: name
      value: "{{ name }}"
    - name: permissionModel
      description: |
        Defines the roles and credentials that Resilience Hub would use while creating the application, importing its resources, and running an assessment.
      value:
        crossAccountRoleArns:
          - "{{ crossAccountRoleArns }}"
        invokerRoleName: "{{ invokerRoleName }}"
        type_: "{{ type_ }}"
    - name: policyArn
      value: "{{ policyArn }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_app"
    values={[
        { label: 'update_app', value: 'update_app' }
    ]}
>
<TabItem value="update_app">

Updates an application.

```sql
UPDATE aws.resiliencehub.apps
SET 
appArn = '{{ appArn }}',
assessmentSchedule = '{{ assessmentSchedule }}',
clearResiliencyPolicyArn = {{ clearResiliencyPolicyArn }},
description = '{{ description }}',
eventSubscriptions = '{{ eventSubscriptions }}',
permissionModel = '{{ permissionModel }}',
policyArn = '{{ policyArn }}'
WHERE 
region = '{{ region }}' --required
AND appArn = '{{ appArn }}' --required
RETURNING
app;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app"
    values={[
        { label: 'delete_app', value: 'delete_app' }
    ]}
>
<TabItem value="delete_app">

Deletes an Resilience Hub application. This is a destructive action that can't be undone.

```sql
DELETE FROM aws.resiliencehub.apps
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_update_recommendation_status"
    values={[
        { label: 'batch_update_recommendation_status', value: 'batch_update_recommendation_status' },
        { label: 'import_resources_to_draft_app_version', value: 'import_resources_to_draft_app_version' },
        { label: 'publish_app_version', value: 'publish_app_version' },
        { label: 'start_app_assessment', value: 'start_app_assessment' }
    ]}
>
<TabItem value="batch_update_recommendation_status">

Enables you to include or exclude one or more operational recommendations.

```sql
EXEC aws.resiliencehub.apps.batch_update_recommendation_status 
@region='{{ region }}' --required 
@@json=
'{
"appArn": "{{ appArn }}", 
"requestEntries": "{{ requestEntries }}"
}'
;
```
</TabItem>
<TabItem value="import_resources_to_draft_app_version">

Imports resources to Resilience Hub application draft version from different input sources. For more information about the input sources supported by Resilience Hub, see Discover the structure and describe your Resilience Hub application.

```sql
EXEC aws.resiliencehub.apps.import_resources_to_draft_app_version 
@region='{{ region }}' --required 
@@json=
'{
"appArn": "{{ appArn }}", 
"eksSources": "{{ eksSources }}", 
"importStrategy": "{{ importStrategy }}", 
"sourceArns": "{{ sourceArns }}", 
"terraformSources": "{{ terraformSources }}"
}'
;
```
</TabItem>
<TabItem value="publish_app_version">

Publishes a new version of a specific Resilience Hub application.

```sql
EXEC aws.resiliencehub.apps.publish_app_version 
@region='{{ region }}' --required 
@@json=
'{
"appArn": "{{ appArn }}", 
"versionName": "{{ versionName }}"
}'
;
```
</TabItem>
<TabItem value="start_app_assessment">

Creates a new application assessment for an application.

```sql
EXEC aws.resiliencehub.apps.start_app_assessment 
@region='{{ region }}' --required 
@@json=
'{
"appArn": "{{ appArn }}", 
"appVersion": "{{ appVersion }}", 
"assessmentName": "{{ assessmentName }}", 
"clientToken": "{{ clientToken }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
</Tabs>
