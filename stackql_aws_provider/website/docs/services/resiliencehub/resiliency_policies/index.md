--- 
title: resiliency_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resiliency_policies
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

Creates, updates, deletes, gets or lists a <code>resiliency_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resiliency_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehub.resiliency_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_resiliency_policy"
    values={[
        { label: 'describe_resiliency_policy', value: 'describe_resiliency_policy' },
        { label: 'list_resiliency_policies', value: 'list_resiliency_policies' }
    ]}
>
<TabItem value="describe_resiliency_policy">

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
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when the resiliency policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataLocationConstraint" /></td>
    <td><code>string</code></td>
    <td>Specifies a high-level geographical location constraint for where your resilience policy data can be stored. (AnyLocation, SameContinent, SameCountry)</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedCostTier" /></td>
    <td><code>string</code></td>
    <td>Specifies the estimated cost tier of the resiliency policy. (L1, L2, L3, L4)</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>object</code></td>
    <td>The resiliency policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policyArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:partition:resiliencehub:region:account:resiliency-policy/policy-id. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyDescription" /></td>
    <td><code>string</code></td>
    <td>Description of the resiliency policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policyName" /></td>
    <td><code>string</code></td>
    <td>The name of the policy (pattern: &lt;code&gt;^&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_\-&#93;&#123;1,59&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair.</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>The tier for this resiliency policy, ranging from the highest severity (MissionCritical) to lowest (NonCritical). (MissionCritical, Critical, Important, CoreServices, NonCritical, NotApplicable)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resiliency_policies">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Token for the next set of results, or null if there are no more results. (pattern: &lt;code&gt;^\S&#123;1,2000&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resiliencyPolicies" /></td>
    <td><code>array</code></td>
    <td>The resiliency policies for the Resilience Hub applications.</td>
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
    <td><a href="#describe_resiliency_policy"><CopyableCode code="describe_resiliency_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a specified resiliency policy for an Resilience Hub application. The returned policy object includes creation time, data location constraints, the Amazon Resource Name (ARN) for the policy, tags, tier, and more.</td>
</tr>
<tr>
    <td><a href="#list_resiliency_policies"><CopyableCode code="list_resiliency_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-policyName"><code>policyName</code></a></td>
    <td>Lists the resiliency policies for the Resilience Hub applications.</td>
</tr>
<tr>
    <td><a href="#create_resiliency_policy"><CopyableCode code="create_resiliency_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policy"><code>policy</code></a>, <a href="#parameter-policyName"><code>policyName</code></a>, <a href="#parameter-tier"><code>tier</code></a></td>
    <td></td>
    <td>Creates a resiliency policy for an application. Resilience Hub allows you to provide a value of zero for rtoInSecs and rpoInSecs of your resiliency policy. But, while assessing your application, the lowest possible assessment result is near zero. Hence, if you provide value zero for rtoInSecs and rpoInSecs, the estimated workload RTO and estimated workload RPO result will be near zero and the Compliance status for your application will be set to Policy breached.</td>
</tr>
<tr>
    <td><a href="#update_resiliency_policy"><CopyableCode code="update_resiliency_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyArn"><code>policyArn</code></a></td>
    <td></td>
    <td>Updates a resiliency policy. Resilience Hub allows you to provide a value of zero for rtoInSecs and rpoInSecs of your resiliency policy. But, while assessing your application, the lowest possible assessment result is near zero. Hence, if you provide value zero for rtoInSecs and rpoInSecs, the estimated workload RTO and estimated workload RPO result will be near zero and the Compliance status for your application will be set to Policy breached.</td>
</tr>
<tr>
    <td><a href="#delete_resiliency_policy"><CopyableCode code="delete_resiliency_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a resiliency policy. This is a destructive action that can't be undone.</td>
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
    <td>Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Null, or the token from a previous call to get the next set of results.</td>
</tr>
<tr id="parameter-policyName">
    <td><CopyableCode code="policyName" /></td>
    <td><code>string</code></td>
    <td>Name of the resiliency policy.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_resiliency_policy"
    values={[
        { label: 'describe_resiliency_policy', value: 'describe_resiliency_policy' },
        { label: 'list_resiliency_policies', value: 'list_resiliency_policies' }
    ]}
>
<TabItem value="describe_resiliency_policy">

Describes a specified resiliency policy for an Resilience Hub application. The returned policy object includes creation time, data location constraints, the Amazon Resource Name (ARN) for the policy, tags, tier, and more.

```sql
SELECT
creationTime,
dataLocationConstraint,
estimatedCostTier,
policy,
policyArn,
policyDescription,
policyName,
tags,
tier
FROM aws.resiliencehub.resiliency_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resiliency_policies">

Lists the resiliency policies for the Resilience Hub applications.

```sql
SELECT
nextToken,
resiliencyPolicies
FROM aws.resiliencehub.resiliency_policies
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND policyName = '{{ policyName }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resiliency_policy"
    values={[
        { label: 'create_resiliency_policy', value: 'create_resiliency_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resiliency_policy">

Creates a resiliency policy for an application. Resilience Hub allows you to provide a value of zero for rtoInSecs and rpoInSecs of your resiliency policy. But, while assessing your application, the lowest possible assessment result is near zero. Hence, if you provide value zero for rtoInSecs and rpoInSecs, the estimated workload RTO and estimated workload RPO result will be near zero and the Compliance status for your application will be set to Policy breached.

```sql
INSERT INTO aws.resiliencehub.resiliency_policies (
clientToken,
dataLocationConstraint,
policy,
policyDescription,
policyName,
tags,
tier,
region
)
SELECT 
'{{ clientToken }}',
'{{ dataLocationConstraint }}',
'{{ policy }}' /* required */,
'{{ policyDescription }}',
'{{ policyName }}' /* required */,
'{{ tags }}',
'{{ tier }}' /* required */,
'{{ region }}'
RETURNING
policy
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resiliency_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resiliency_policies resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: dataLocationConstraint
      value: "{{ dataLocationConstraint }}"
      valid_values: ['AnyLocation', 'SameContinent', 'SameCountry']
    - name: policy
      value: "{{ policy }}"
    - name: policyDescription
      value: "{{ policyDescription }}"
    - name: policyName
      value: "{{ policyName }}"
    - name: tags
      value: "{{ tags }}"
    - name: tier
      value: "{{ tier }}"
      valid_values: ['MissionCritical', 'Critical', 'Important', 'CoreServices', 'NonCritical', 'NotApplicable']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_resiliency_policy"
    values={[
        { label: 'update_resiliency_policy', value: 'update_resiliency_policy' }
    ]}
>
<TabItem value="update_resiliency_policy">

Updates a resiliency policy. Resilience Hub allows you to provide a value of zero for rtoInSecs and rpoInSecs of your resiliency policy. But, while assessing your application, the lowest possible assessment result is near zero. Hence, if you provide value zero for rtoInSecs and rpoInSecs, the estimated workload RTO and estimated workload RPO result will be near zero and the Compliance status for your application will be set to Policy breached.

```sql
UPDATE aws.resiliencehub.resiliency_policies
SET 
dataLocationConstraint = '{{ dataLocationConstraint }}',
policy = '{{ policy }}',
policyArn = '{{ policyArn }}',
policyDescription = '{{ policyDescription }}',
policyName = '{{ policyName }}',
tier = '{{ tier }}'
WHERE 
region = '{{ region }}' --required
AND policyArn = '{{ policyArn }}' --required
RETURNING
policy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resiliency_policy"
    values={[
        { label: 'delete_resiliency_policy', value: 'delete_resiliency_policy' }
    ]}
>
<TabItem value="delete_resiliency_policy">

Deletes a resiliency policy. This is a destructive action that can't be undone.

```sql
DELETE FROM aws.resiliencehub.resiliency_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
