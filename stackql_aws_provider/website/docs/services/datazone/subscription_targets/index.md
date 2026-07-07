--- 
title: subscription_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - subscription_targets
  - datazone
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

Creates, updates, deletes, gets or lists a <code>subscription_targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscription_targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.subscription_targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_subscription_target"
    values={[
        { label: 'get_subscription_target', value: 'get_subscription_target' },
        { label: 'list_subscription_targets', value: 'list_subscription_targets' }
    ]}
>
<TabItem value="get_subscription_target">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the subscription target. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the subscription target.</td>
</tr>
<tr>
    <td><CopyableCode code="applicableAssetTypes" /></td>
    <td><code>array</code></td>
    <td>The asset types associated with the subscription target.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizedPrincipals" /></td>
    <td><code>array</code></td>
    <td>The authorized principals of the subscription target.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the subscription target was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the subscription target.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which the subscription target exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment associated with the subscription target. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="manageAccessRole" /></td>
    <td><code>string</code></td>
    <td>The manage access role with which the subscription target was created. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):iam::\d&#123;12&#125;:(role|role/service-role)/&#91;\w+=,.@-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the project associated with the subscription target. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The provider of the subscription target.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionGrantCreationMode" /></td>
    <td><code>string</code></td>
    <td>Determines the subscription grant creation mode for this target, defining if grants are auto-created upon subscription approval or managed manually. (AUTOMATIC, MANUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionTargetConfig" /></td>
    <td><code>array</code></td>
    <td>The configuration of teh subscription target.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the subscription target.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the subscription target was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who updated the subscription target.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_subscription_targets">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the subscription target. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the subscription target.</td>
</tr>
<tr>
    <td><CopyableCode code="applicableAssetTypes" /></td>
    <td><code>array</code></td>
    <td>The asset types included in the subscription target.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizedPrincipals" /></td>
    <td><code>array</code></td>
    <td>The authorized principals included in the subscription target.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the subscription target was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the subscription target.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone domain in which the subscription target exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the environment of the subscription target. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="manageAccessRole" /></td>
    <td><code>string</code></td>
    <td>The manage access role specified in the subscription target. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):iam::\d&#123;12&#125;:(role|role/service-role)/&#91;\w+=,.@-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the project specified in the subscription target. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The provider of the subscription target.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionGrantCreationMode" /></td>
    <td><code>string</code></td>
    <td>Determines the subscription grant creation mode for this target, defining if grants are auto-created upon subscription approval or managed manually. (AUTOMATIC, MANUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionTargetConfig" /></td>
    <td><code>array</code></td>
    <td>The configuration of the subscription target.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the subscription target.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the subscription target was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who updated the subscription target.</td>
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
    <td><a href="#get_subscription_target"><CopyableCode code="get_subscription_target" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the subscription target in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#list_subscription_targets"><CopyableCode code="list_subscription_targets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists subscription targets in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#create_subscription_target"><CopyableCode code="create_subscription_target" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-subscriptionTargetConfig"><code>subscriptionTargetConfig</code></a>, <a href="#parameter-authorizedPrincipals"><code>authorizedPrincipals</code></a>, <a href="#parameter-manageAccessRole"><code>manageAccessRole</code></a>, <a href="#parameter-applicableAssetTypes"><code>applicableAssetTypes</code></a></td>
    <td></td>
    <td>Creates a subscription target in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#update_subscription_target"><CopyableCode code="update_subscription_target" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified subscription target in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#delete_subscription_target"><CopyableCode code="delete_subscription_target" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a subscription target in Amazon DataZone.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which the subscription target is deleted.</td>
</tr>
<tr id="parameter-environment_identifier">
    <td><CopyableCode code="environment_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone environment in which the subscription target is deleted.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the subscription target that is deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of subscription targets to return in a single call to ListSubscriptionTargets. When the number of subscription targets to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListSubscriptionTargets to list the next set of subscription targets.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of subscription targets is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of subscription targets, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListSubscriptionTargets to list the next set of subscription targets.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>Specifies the way in which the results of this action are to be sorted.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Specifies the sort order for the results of this action.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_subscription_target"
    values={[
        { label: 'get_subscription_target', value: 'get_subscription_target' },
        { label: 'list_subscription_targets', value: 'list_subscription_targets' }
    ]}
>
<TabItem value="get_subscription_target">

Gets the subscription target in Amazon DataZone.

```sql
SELECT
id,
name,
applicableAssetTypes,
authorizedPrincipals,
createdAt,
createdBy,
domainId,
environmentId,
manageAccessRole,
projectId,
provider,
subscriptionGrantCreationMode,
subscriptionTargetConfig,
type_,
updatedAt,
updatedBy
FROM aws.datazone.subscription_targets
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND environment_identifier = '{{ environment_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_subscription_targets">

Lists subscription targets in Amazon DataZone.

```sql
SELECT
id,
name,
applicableAssetTypes,
authorizedPrincipals,
createdAt,
createdBy,
domainId,
environmentId,
manageAccessRole,
projectId,
provider,
subscriptionGrantCreationMode,
subscriptionTargetConfig,
type_,
updatedAt,
updatedBy
FROM aws.datazone.subscription_targets
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND environment_identifier = '{{ environment_identifier }}' -- required
AND region = '{{ region }}' -- required
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_subscription_target"
    values={[
        { label: 'create_subscription_target', value: 'create_subscription_target' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_subscription_target">

Creates a subscription target in Amazon DataZone.

```sql
INSERT INTO aws.datazone.subscription_targets (
name,
type,
subscriptionTargetConfig,
authorizedPrincipals,
manageAccessRole,
applicableAssetTypes,
provider,
clientToken,
subscriptionGrantCreationMode,
domain_identifier,
environment_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ type }}' /* required */,
'{{ subscriptionTargetConfig }}' /* required */,
'{{ authorizedPrincipals }}' /* required */,
'{{ manageAccessRole }}' /* required */,
'{{ applicableAssetTypes }}' /* required */,
'{{ provider }}',
'{{ clientToken }}',
'{{ subscriptionGrantCreationMode }}',
'{{ domain_identifier }}',
'{{ environment_identifier }}',
'{{ region }}'
RETURNING
id,
name,
applicableAssetTypes,
authorizedPrincipals,
createdAt,
createdBy,
domainId,
environmentId,
manageAccessRole,
projectId,
provider,
subscriptionGrantCreationMode,
subscriptionTargetConfig,
type_,
updatedAt,
updatedBy
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: subscription_targets
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the subscription_targets resource.
    - name: environment_identifier
      value: "{{ environment_identifier }}"
      description: Required parameter for the subscription_targets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the subscription_targets resource.
    - name: name
      value: "{{ name }}"
    - name: type
      value: "{{ type }}"
    - name: subscriptionTargetConfig
      value:
        - formName: "{{ formName }}"
          content: "{{ content }}"
    - name: authorizedPrincipals
      value:
        - "{{ authorizedPrincipals }}"
    - name: manageAccessRole
      value: "{{ manageAccessRole }}"
    - name: applicableAssetTypes
      value:
        - "{{ applicableAssetTypes }}"
    - name: provider
      value: "{{ provider }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: subscriptionGrantCreationMode
      value: "{{ subscriptionGrantCreationMode }}"
      valid_values: ['AUTOMATIC', 'MANUAL']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_subscription_target"
    values={[
        { label: 'update_subscription_target', value: 'update_subscription_target' }
    ]}
>
<TabItem value="update_subscription_target">

Updates the specified subscription target in Amazon DataZone.

```sql
UPDATE aws.datazone.subscription_targets
SET 
name = '{{ name }}',
authorizedPrincipals = '{{ authorizedPrincipals }}',
applicableAssetTypes = '{{ applicableAssetTypes }}',
subscriptionTargetConfig = '{{ subscriptionTargetConfig }}',
manageAccessRole = '{{ manageAccessRole }}',
provider = '{{ provider }}',
subscriptionGrantCreationMode = '{{ subscriptionGrantCreationMode }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND environment_identifier = '{{ environment_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
applicableAssetTypes,
authorizedPrincipals,
createdAt,
createdBy,
domainId,
environmentId,
manageAccessRole,
projectId,
provider,
subscriptionGrantCreationMode,
subscriptionTargetConfig,
type_,
updatedAt,
updatedBy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_subscription_target"
    values={[
        { label: 'delete_subscription_target', value: 'delete_subscription_target' }
    ]}
>
<TabItem value="delete_subscription_target">

Deletes a subscription target in Amazon DataZone.

```sql
DELETE FROM aws.datazone.subscription_targets
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND environment_identifier = '{{ environment_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
