--- 
title: app_assessments
hide_title: false
hide_table_of_contents: false
keywords:
  - app_assessments
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

Creates, updates, deletes, gets or lists an <code>app_assessments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_assessments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehub.app_assessments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_app_assessment"
    values={[
        { label: 'describe_app_assessment', value: 'describe_app_assessment' },
        { label: 'list_app_assessments', value: 'list_app_assessments' }
    ]}
>
<TabItem value="describe_app_assessment">

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
    <td><CopyableCode code="appArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="appVersion" /></td>
    <td><code>string</code></td>
    <td>Version of an application. (pattern: &lt;code&gt;^\S&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assessmentArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:partition:resiliencehub:region:account:app-assessment/app-id. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assessmentName" /></td>
    <td><code>string</code></td>
    <td>Name of the assessment. (pattern: &lt;code&gt;^&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_\-&#93;&#123;1,59&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assessmentStatus" /></td>
    <td><code>string</code></td>
    <td>Current status of the assessment for the resiliency policy. (Pending, InProgress, Failed, Success)</td>
</tr>
<tr>
    <td><CopyableCode code="compliance" /></td>
    <td><code>object</code></td>
    <td>Application compliance against the resiliency policy.</td>
</tr>
<tr>
    <td><CopyableCode code="complianceStatus" /></td>
    <td><code>string</code></td>
    <td>Current status of the compliance for the resiliency policy. (PolicyBreached, PolicyMet, NotApplicable, MissingPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="cost" /></td>
    <td><code>object</code></td>
    <td>Cost for the application.</td>
</tr>
<tr>
    <td><CopyableCode code="driftStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates if compliance drifts (deviations) were detected while running an assessment for your application. (NotChecked, NotDetected, Detected)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>End time for the action.</td>
</tr>
<tr>
    <td><CopyableCode code="invoker" /></td>
    <td><code>string</code></td>
    <td>The entity that invoked the assessment. (User, System)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Error or warning message from the assessment execution</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>object</code></td>
    <td>Resiliency policy of an application.</td>
</tr>
<tr>
    <td><CopyableCode code="resiliencyScore" /></td>
    <td><code>object</code></td>
    <td>Current resiliency score for an application.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceErrorsDetails" /></td>
    <td><code>object</code></td>
    <td>A resource error object containing a list of errors retrieving an application's resources.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Starting time for the action.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>object</code></td>
    <td>Indicates the AI-generated summary for the Resilience Hub assessment, providing a concise overview that highlights the top risks and recommendations. This property is available only in the US East (N. Virginia) Region.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair.</td>
</tr>
<tr>
    <td><CopyableCode code="versionName" /></td>
    <td><code>string</code></td>
    <td>Version name of the published application. (pattern: &lt;code&gt;^\S&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_app_assessments">

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
    <td><CopyableCode code="assessmentSummaries" /></td>
    <td><code>array</code></td>
    <td>The summaries for the specified assessments, returned as an object. This object includes application versions, associated Amazon Resource Numbers (ARNs), cost, messages, resiliency scores, and more.</td>
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
    <td><a href="#describe_app_assessment"><CopyableCode code="describe_app_assessment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an assessment for an Resilience Hub application.</td>
</tr>
<tr>
    <td><a href="#list_app_assessments"><CopyableCode code="list_app_assessments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-appArn"><code>appArn</code></a>, <a href="#parameter-assessmentName"><code>assessmentName</code></a>, <a href="#parameter-assessmentStatus"><code>assessmentStatus</code></a>, <a href="#parameter-complianceStatus"><code>complianceStatus</code></a>, <a href="#parameter-invoker"><code>invoker</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-reverseOrder"><code>reverseOrder</code></a></td>
    <td>Lists the assessments for an Resilience Hub application. You can use request parameters to refine the results for the response object.</td>
</tr>
<tr>
    <td><a href="#delete_app_assessment"><CopyableCode code="delete_app_assessment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Resilience Hub application assessment. This is a destructive action that can't be undone.</td>
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
<tr id="parameter-assessmentName">
    <td><CopyableCode code="assessmentName" /></td>
    <td><code>string</code></td>
    <td>The name for the assessment.</td>
</tr>
<tr id="parameter-assessmentStatus">
    <td><CopyableCode code="assessmentStatus" /></td>
    <td><code>array</code></td>
    <td>The current status of the assessment for the resiliency policy.</td>
</tr>
<tr id="parameter-complianceStatus">
    <td><CopyableCode code="complianceStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of compliance for the resiliency policy.</td>
</tr>
<tr id="parameter-invoker">
    <td><CopyableCode code="invoker" /></td>
    <td><code>string</code></td>
    <td>Specifies the entity that invoked a specific assessment, either a User or the System.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Null, or the token from a previous call to get the next set of results.</td>
</tr>
<tr id="parameter-reverseOrder">
    <td><CopyableCode code="reverseOrder" /></td>
    <td><code>boolean</code></td>
    <td>The default is to sort by ascending startTime. To sort by descending startTime, set reverseOrder to true.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_app_assessment"
    values={[
        { label: 'describe_app_assessment', value: 'describe_app_assessment' },
        { label: 'list_app_assessments', value: 'list_app_assessments' }
    ]}
>
<TabItem value="describe_app_assessment">

Describes an assessment for an Resilience Hub application.

```sql
SELECT
appArn,
appVersion,
assessmentArn,
assessmentName,
assessmentStatus,
compliance,
complianceStatus,
cost,
driftStatus,
endTime,
invoker,
message,
policy,
resiliencyScore,
resourceErrorsDetails,
startTime,
summary,
tags,
versionName
FROM aws.resiliencehub.app_assessments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_app_assessments">

Lists the assessments for an Resilience Hub application. You can use request parameters to refine the results for the response object.

```sql
SELECT
assessmentSummaries,
nextToken
FROM aws.resiliencehub.app_assessments
WHERE region = '{{ region }}' -- required
AND appArn = '{{ appArn }}'
AND assessmentName = '{{ assessmentName }}'
AND assessmentStatus = '{{ assessmentStatus }}'
AND complianceStatus = '{{ complianceStatus }}'
AND invoker = '{{ invoker }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND reverseOrder = '{{ reverseOrder }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app_assessment"
    values={[
        { label: 'delete_app_assessment', value: 'delete_app_assessment' }
    ]}
>
<TabItem value="delete_app_assessment">

Deletes an Resilience Hub application assessment. This is a destructive action that can't be undone.

```sql
DELETE FROM aws.resiliencehub.app_assessments
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
