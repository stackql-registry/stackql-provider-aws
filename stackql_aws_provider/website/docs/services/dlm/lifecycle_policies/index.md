--- 
title: lifecycle_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - lifecycle_policies
  - dlm
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

Creates, updates, deletes, gets or lists a <code>lifecycle_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lifecycle_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dlm.lifecycle_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lifecycle_policy"
    values={[
        { label: 'get_lifecycle_policy', value: 'get_lifecycle_policy' },
        { label: 'get_lifecycle_policies', value: 'get_lifecycle_policies' }
    ]}
>
<TabItem value="get_lifecycle_policy">

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
    <td><CopyableCode code="DateCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The local date and time when the lifecycle policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DateModified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The local date and time when the lifecycle policy was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultPolicy" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the policy is a default lifecycle policy or a custom lifecycle policy. true - the policy is a default policy. false - the policy is a custom policy.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the lifecycle policy. (pattern: &lt;code&gt;&#91;0-9A-Za-z _-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,3&#125;)&#123;0,2&#125;:iam::\d+:role/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the policy. (pattern: &lt;code&gt;^arn:aws(-&#91;a-z&#93;&#123;1,3&#125;)&#123;0,2&#125;:dlm:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:\d+:policy/&#91;0-9A-Za-z_-&#93;&#123;1,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyDetails" /></td>
    <td><code>object</code></td>
    <td>Specifies the configuration of a lifecycle policy.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the lifecycle policy. (pattern: &lt;code&gt;policy-&#91;a-f0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The activation state of the lifecycle policy. (ENABLED, DISABLED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>The description of the status. (pattern: &lt;code&gt;&#91;\p&#123;all&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_lifecycle_policies">

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
    <td><CopyableCode code="Policies" /></td>
    <td><code>array</code></td>
    <td>Summary information about the lifecycle policies.</td>
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
    <td><a href="#get_lifecycle_policy"><CopyableCode code="get_lifecycle_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets detailed information about the specified lifecycle policy.</td>
</tr>
<tr>
    <td><a href="#get_lifecycle_policies"><CopyableCode code="get_lifecycle_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-policyIds"><code>policyIds</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-resourceTypes"><code>resourceTypes</code></a>, <a href="#parameter-targetTags"><code>targetTags</code></a>, <a href="#parameter-tagsToAdd"><code>tagsToAdd</code></a>, <a href="#parameter-defaultPolicyType"><code>defaultPolicyType</code></a></td>
    <td>Gets summary information about all or the specified data lifecycle policies. To get complete information about a policy, use GetLifecyclePolicy.</td>
</tr>
<tr>
    <td><a href="#create_lifecycle_policy"><CopyableCode code="create_lifecycle_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExecutionRoleArn"><code>ExecutionRoleArn</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-State"><code>State</code></a></td>
    <td></td>
    <td>Creates an Amazon Data Lifecycle Manager lifecycle policy. Amazon Data Lifecycle Manager supports the following policy types: Custom EBS snapshot policy Custom EBS-backed AMI policy Cross-account copy event policy Default policy for EBS snapshots Default policy for EBS-backed AMIs For more information, see Default policies vs custom policies. If you create a default policy, you can specify the request parameters either in the request body, or in the PolicyDetails request structure, but not both.</td>
</tr>
<tr>
    <td><a href="#update_lifecycle_policy"><CopyableCode code="update_lifecycle_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified lifecycle policy. For more information about updating a policy, see Modify lifecycle policies.</td>
</tr>
<tr>
    <td><a href="#delete_lifecycle_policy"><CopyableCode code="delete_lifecycle_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified lifecycle policy and halts the automated operations that the policy specified. For more information about deleting a policy, see Delete lifecycle policies.</td>
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
<tr id="parameter-policy_id">
    <td><CopyableCode code="policy_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the lifecycle policy.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-defaultPolicyType">
    <td><CopyableCode code="defaultPolicyType" /></td>
    <td><code>string</code></td>
    <td>&#91;Default policies only&#93; Specifies the type of default policy to get. Specify one of the following: VOLUME - To get only the default policy for EBS snapshots INSTANCE - To get only the default policy for EBS-backed AMIs ALL - To get all default policies</td>
</tr>
<tr id="parameter-policyIds">
    <td><CopyableCode code="policyIds" /></td>
    <td><code>array</code></td>
    <td>The identifiers of the data lifecycle policies.</td>
</tr>
<tr id="parameter-resourceTypes">
    <td><CopyableCode code="resourceTypes" /></td>
    <td><code>array</code></td>
    <td>The resource type.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The activation state.</td>
</tr>
<tr id="parameter-tagsToAdd">
    <td><CopyableCode code="tagsToAdd" /></td>
    <td><code>array</code></td>
    <td>The tags to add to objects created by the policy. Tags are strings in the format key=value. These user-defined tags are added in addition to the Amazon Web Services-added lifecycle tags.</td>
</tr>
<tr id="parameter-targetTags">
    <td><CopyableCode code="targetTags" /></td>
    <td><code>array</code></td>
    <td>The target tag for a policy. Tags are strings in the format key=value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_lifecycle_policy"
    values={[
        { label: 'get_lifecycle_policy', value: 'get_lifecycle_policy' },
        { label: 'get_lifecycle_policies', value: 'get_lifecycle_policies' }
    ]}
>
<TabItem value="get_lifecycle_policy">

Gets detailed information about the specified lifecycle policy.

```sql
SELECT
DateCreated,
DateModified,
DefaultPolicy,
Description,
ExecutionRoleArn,
PolicyArn,
PolicyDetails,
PolicyId,
State,
StatusMessage,
Tags
FROM aws.dlm.lifecycle_policies
WHERE policy_id = '{{ policy_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_lifecycle_policies">

Gets summary information about all or the specified data lifecycle policies. To get complete information about a policy, use GetLifecyclePolicy.

```sql
SELECT
Policies
FROM aws.dlm.lifecycle_policies
WHERE region = '{{ region }}' -- required
AND policyIds = '{{ policyIds }}'
AND state = '{{ state }}'
AND resourceTypes = '{{ resourceTypes }}'
AND targetTags = '{{ targetTags }}'
AND tagsToAdd = '{{ tagsToAdd }}'
AND defaultPolicyType = '{{ defaultPolicyType }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_lifecycle_policy"
    values={[
        { label: 'create_lifecycle_policy', value: 'create_lifecycle_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_lifecycle_policy">

Creates an Amazon Data Lifecycle Manager lifecycle policy. Amazon Data Lifecycle Manager supports the following policy types: Custom EBS snapshot policy Custom EBS-backed AMI policy Cross-account copy event policy Default policy for EBS snapshots Default policy for EBS-backed AMIs For more information, see Default policies vs custom policies. If you create a default policy, you can specify the request parameters either in the request body, or in the PolicyDetails request structure, but not both.

```sql
INSERT INTO aws.dlm.lifecycle_policies (
ExecutionRoleArn,
Description,
State,
PolicyDetails,
Tags,
DefaultPolicy,
CreateInterval,
RetainInterval,
CopyTags,
ExtendDeletion,
CrossRegionCopyTargets,
Exclusions,
region
)
SELECT 
'{{ ExecutionRoleArn }}' /* required */,
'{{ Description }}' /* required */,
'{{ State }}' /* required */,
'{{ PolicyDetails }}',
'{{ Tags }}',
'{{ DefaultPolicy }}',
{{ CreateInterval }},
{{ RetainInterval }},
{{ CopyTags }},
{{ ExtendDeletion }},
'{{ CrossRegionCopyTargets }}',
'{{ Exclusions }}',
'{{ region }}'
RETURNING
PolicyId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: lifecycle_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the lifecycle_policies resource.
    - name: ExecutionRoleArn
      value: "{{ ExecutionRoleArn }}"
    - name: Description
      value: "{{ Description }}"
    - name: State
      value: "{{ State }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: PolicyDetails
      description: |
        Specifies the configuration of a lifecycle policy.
      value:
        PolicyType: "{{ PolicyType }}"
        ResourceTypes:
          - "{{ ResourceTypes }}"
        ResourceLocations:
          - "{{ ResourceLocations }}"
        TargetTags:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
        Schedules:
          - Name: "{{ Name }}"
            CopyTags: {{ CopyTags }}
            TagsToAdd: "{{ TagsToAdd }}"
            VariableTags: "{{ VariableTags }}"
            CreateRule:
              Location: "{{ Location }}"
              Interval: {{ Interval }}
              IntervalUnit: "{{ IntervalUnit }}"
              Times:
                - "{{ Times }}"
              CronExpression: "{{ CronExpression }}"
              Scripts:
                - Stages: "{{ Stages }}"
                  ExecutionHandlerService: "{{ ExecutionHandlerService }}"
                  ExecutionHandler: "{{ ExecutionHandler }}"
                  ExecuteOperationOnScriptFailure: {{ ExecuteOperationOnScriptFailure }}
                  ExecutionTimeout: {{ ExecutionTimeout }}
                  MaximumRetryCount: {{ MaximumRetryCount }}
            RetainRule:
              Count: {{ Count }}
              Interval: {{ Interval }}
              IntervalUnit: "{{ IntervalUnit }}"
            FastRestoreRule:
              Count: {{ Count }}
              Interval: {{ Interval }}
              IntervalUnit: "{{ IntervalUnit }}"
              AvailabilityZones:
                - "{{ AvailabilityZones }}"
              AvailabilityZoneIds:
                - "{{ AvailabilityZoneIds }}"
            CrossRegionCopyRules: "{{ CrossRegionCopyRules }}"
            ShareRules: "{{ ShareRules }}"
            DeprecateRule:
              Count: {{ Count }}
              Interval: {{ Interval }}
              IntervalUnit: "{{ IntervalUnit }}"
            ArchiveRule:
              RetainRule:
                RetentionArchiveTier:
                  Count: {{ Count }}
                  Interval: {{ Interval }}
                  IntervalUnit: "{{ IntervalUnit }}"
        Parameters:
          ExcludeBootVolume: {{ ExcludeBootVolume }}
          NoReboot: {{ NoReboot }}
          ExcludeDataVolumeTags:
            - Key: "{{ Key }}"
              Value: "{{ Value }}"
        EventSource:
          Type: "{{ Type }}"
          Parameters:
            EventType: "{{ EventType }}"
            SnapshotOwner:
              - "{{ SnapshotOwner }}"
            DescriptionRegex: "{{ DescriptionRegex }}"
        Actions:
          - Name: "{{ Name }}"
            CrossRegionCopy: "{{ CrossRegionCopy }}"
        PolicyLanguage: "{{ PolicyLanguage }}"
        ResourceType: "{{ ResourceType }}"
        CreateInterval: {{ CreateInterval }}
        RetainInterval: {{ RetainInterval }}
        CopyTags: {{ CopyTags }}
        CrossRegionCopyTargets:
          - TargetRegion: "{{ TargetRegion }}"
        ExtendDeletion: {{ ExtendDeletion }}
        Exclusions:
          ExcludeBootVolumes: {{ ExcludeBootVolumes }}
          ExcludeVolumeTypes:
            - "{{ ExcludeVolumeTypes }}"
          ExcludeTags:
            - Key: "{{ Key }}"
              Value: "{{ Value }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: DefaultPolicy
      value: "{{ DefaultPolicy }}"
      valid_values: ['VOLUME', 'INSTANCE']
    - name: CreateInterval
      value: {{ CreateInterval }}
    - name: RetainInterval
      value: {{ RetainInterval }}
    - name: CopyTags
      value: {{ CopyTags }}
    - name: ExtendDeletion
      value: {{ ExtendDeletion }}
    - name: CrossRegionCopyTargets
      value:
        - TargetRegion: "{{ TargetRegion }}"
    - name: Exclusions
      description: |
        [Default policies only] Specifies exclusion parameters for volumes or instances for which you do not want to create snapshots or AMIs. The policy will not create snapshots or AMIs for target resources that match any of the specified exclusion parameters.
      value:
        ExcludeBootVolumes: {{ ExcludeBootVolumes }}
        ExcludeVolumeTypes:
          - "{{ ExcludeVolumeTypes }}"
        ExcludeTags:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_lifecycle_policy"
    values={[
        { label: 'update_lifecycle_policy', value: 'update_lifecycle_policy' }
    ]}
>
<TabItem value="update_lifecycle_policy">

Updates the specified lifecycle policy. For more information about updating a policy, see Modify lifecycle policies.

```sql
UPDATE aws.dlm.lifecycle_policies
SET 
ExecutionRoleArn = '{{ ExecutionRoleArn }}',
State = '{{ State }}',
Description = '{{ Description }}',
PolicyDetails = '{{ PolicyDetails }}',
CreateInterval = {{ CreateInterval }},
RetainInterval = {{ RetainInterval }},
CopyTags = {{ CopyTags }},
ExtendDeletion = {{ ExtendDeletion }},
CrossRegionCopyTargets = '{{ CrossRegionCopyTargets }}',
Exclusions = '{{ Exclusions }}'
WHERE 
policy_id = '{{ policy_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_lifecycle_policy"
    values={[
        { label: 'delete_lifecycle_policy', value: 'delete_lifecycle_policy' }
    ]}
>
<TabItem value="delete_lifecycle_policy">

Deletes the specified lifecycle policy and halts the automated operations that the policy specified. For more information about deleting a policy, see Delete lifecycle policies.

```sql
DELETE FROM aws.dlm.lifecycle_policies
WHERE policy_id = '{{ policy_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
