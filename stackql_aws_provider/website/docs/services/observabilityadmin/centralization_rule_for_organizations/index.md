--- 
title: centralization_rule_for_organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - centralization_rule_for_organizations
  - observabilityadmin
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

Creates, updates, deletes, gets or lists a <code>centralization_rule_for_organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="centralization_rule_for_organizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.observabilityadmin.centralization_rule_for_organizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_centralization_rule_for_organization"
    values={[
        { label: 'get_centralization_rule_for_organization', value: 'get_centralization_rule_for_organization' }
    ]}
>
<TabItem value="get_centralization_rule_for_organization">

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
    <td><CopyableCode code="centralization_rule" /></td>
    <td><code>object</code></td>
    <td>Defines how telemetry data should be centralized across an Amazon Web Services Organization, including source and destination configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="created_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services region where the organization centralization rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time_stamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the organization centralization rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Account that created the organization centralization rule.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason why an organization centralization rule is marked UNHEALTHY. (TRUSTED_ACCESS_NOT_ENABLED, DESTINATION_ACCOUNT_NOT_IN_ORGANIZATION, INTERNAL_SERVER_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time_stamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the organization centralization rule was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the organization centralization rule. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9\-&#93;+)?:(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z0-9\-&#93;+)?:(&#91;0-9&#93;&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_health" /></td>
    <td><code>string</code></td>
    <td>The health status of the organization centralization rule. (Healthy, Unhealthy, Provisioning)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_name" /></td>
    <td><code>string</code></td>
    <td>The name of the organization centralization rule. (pattern: &lt;code&gt;&#91;0-9A-Za-z-_.#/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tag_propagation_failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason tag propagation is unhealthy for this rule. Only present when TagPropagationStatus is Unhealthy. (RoleNotAssumable, RoleLacksPermissions)</td>
</tr>
<tr>
    <td><CopyableCode code="tag_propagation_status" /></td>
    <td><code>string</code></td>
    <td>The health status of tag propagation for this rule. This status is independent of the overall RuleHealth for log delivery. Returns Healthy when the most recent tag-propagation attempt succeeded, or Unhealthy when the most recent attempt failed. (Healthy, Unhealthy)</td>
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
    <td><a href="#get_centralization_rule_for_organization"><CopyableCode code="get_centralization_rule_for_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a specific organization centralization rule. This operation can only be called by the organization's management account or a delegated administrator account.</td>
</tr>
<tr>
    <td><a href="#create_centralization_rule_for_organization"><CopyableCode code="create_centralization_rule_for_organization" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleName"><code>RuleName</code></a>, <a href="#parameter-Rule"><code>Rule</code></a></td>
    <td></td>
    <td>Creates a centralization rule that applies across an Amazon Web Services Organization. This operation can only be called by the organization's management account or a delegated administrator account.</td>
</tr>
<tr>
    <td><a href="#update_centralization_rule_for_organization"><CopyableCode code="update_centralization_rule_for_organization" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleIdentifier"><code>RuleIdentifier</code></a>, <a href="#parameter-Rule"><code>Rule</code></a></td>
    <td></td>
    <td>Updates an existing centralization rule that applies across an Amazon Web Services Organization. This operation can only be called by the organization's management account or a delegated administrator account.</td>
</tr>
<tr>
    <td><a href="#delete_centralization_rule_for_organization"><CopyableCode code="delete_centralization_rule_for_organization" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an organization-wide centralization rule. This operation can only be called by the organization's management account or a delegated administrator account.</td>
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
    defaultValue="get_centralization_rule_for_organization"
    values={[
        { label: 'get_centralization_rule_for_organization', value: 'get_centralization_rule_for_organization' }
    ]}
>
<TabItem value="get_centralization_rule_for_organization">

Retrieves the details of a specific organization centralization rule. This operation can only be called by the organization's management account or a delegated administrator account.

```sql
SELECT
centralization_rule,
created_region,
created_time_stamp,
creator_account_id,
failure_reason,
last_update_time_stamp,
rule_arn,
rule_health,
rule_name,
tag_propagation_failure_reason,
tag_propagation_status
FROM aws.observabilityadmin.centralization_rule_for_organizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_centralization_rule_for_organization"
    values={[
        { label: 'create_centralization_rule_for_organization', value: 'create_centralization_rule_for_organization' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_centralization_rule_for_organization">

Creates a centralization rule that applies across an Amazon Web Services Organization. This operation can only be called by the organization's management account or a delegated administrator account.

```sql
INSERT INTO aws.observabilityadmin.centralization_rule_for_organizations (
RuleName,
Rule,
Tags,
region
)
SELECT 
'{{ RuleName }}' /* required */,
'{{ Rule }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
rule_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: centralization_rule_for_organizations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the centralization_rule_for_organizations resource.
    - name: RuleName
      value: "{{ RuleName }}"
    - name: Rule
      description: |
        Defines how telemetry data should be centralized across an Amazon Web Services Organization, including source and destination configurations.
      value:
        Source:
          Regions:
            - "{{ Regions }}"
          Scope: "{{ Scope }}"
          SourceLogsConfiguration:
            LogGroupSelectionCriteria: "{{ LogGroupSelectionCriteria }}"
            DataSourceSelectionCriteria: "{{ DataSourceSelectionCriteria }}"
            EncryptedLogGroupStrategy: "{{ EncryptedLogGroupStrategy }}"
          SourceMetricsConfiguration:
            MetricsSelectionCriteria: "{{ MetricsSelectionCriteria }}"
        Destination:
          Region: "{{ Region }}"
          Account: "{{ Account }}"
          DestinationLogsConfiguration:
            LogsEncryptionConfiguration:
              EncryptionStrategy: "{{ EncryptionStrategy }}"
              KmsKeyArn: "{{ KmsKeyArn }}"
              EncryptionConflictResolutionStrategy: "{{ EncryptionConflictResolutionStrategy }}"
              EncryptionScope: "{{ EncryptionScope }}"
            BackupConfiguration:
              Region: "{{ Region }}"
              KmsKeyArn: "{{ KmsKeyArn }}"
            LogGroupNameConfiguration:
              LogGroupNamePattern: "{{ LogGroupNamePattern }}"
            TagPropagationConfiguration:
              DestinationRoleArn: "{{ DestinationRoleArn }}"
              TagConflictResolutionStrategy: "{{ TagConflictResolutionStrategy }}"
          DestinationMetricsConfiguration:
            BackupConfiguration:
              Region: "{{ Region }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_centralization_rule_for_organization"
    values={[
        { label: 'update_centralization_rule_for_organization', value: 'update_centralization_rule_for_organization' }
    ]}
>
<TabItem value="update_centralization_rule_for_organization">

Updates an existing centralization rule that applies across an Amazon Web Services Organization. This operation can only be called by the organization's management account or a delegated administrator account.

```sql
UPDATE aws.observabilityadmin.centralization_rule_for_organizations
SET 
RuleIdentifier = '{{ RuleIdentifier }}',
Rule = '{{ Rule }}'
WHERE 
region = '{{ region }}' --required
AND RuleIdentifier = '{{ RuleIdentifier }}' --required
AND Rule = '{{ Rule }}' --required
RETURNING
rule_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_centralization_rule_for_organization"
    values={[
        { label: 'delete_centralization_rule_for_organization', value: 'delete_centralization_rule_for_organization' }
    ]}
>
<TabItem value="delete_centralization_rule_for_organization">

Deletes an organization-wide centralization rule. This operation can only be called by the organization's management account or a delegated administrator account.

```sql
DELETE FROM aws.observabilityadmin.centralization_rule_for_organizations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
