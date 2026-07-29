--- 
title: agent_spaces
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_spaces
  - securityagent
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

Creates, updates, deletes, gets or lists an <code>agent_spaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_spaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.agent_spaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_agent_spaces"
    values={[
        { label: 'batch_get_agent_spaces', value: 'batch_get_agent_spaces' },
        { label: 'list_agent_spaces', value: 'list_agent_spaces' }
    ]}
>
<TabItem value="batch_get_agent_spaces">

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
    <td><CopyableCode code="agent_spaces" /></td>
    <td><code>array</code></td>
    <td>The list of agent spaces that were found.</td>
</tr>
<tr>
    <td><CopyableCode code="not_found" /></td>
    <td><code>array</code></td>
    <td>The list of agent space identifiers that were not found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agent_spaces">

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
    <td>The name of the agent space.</td>
</tr>
<tr>
    <td><CopyableCode code="agent_space_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the agent space.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the agent space was created, in UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the agent space was last updated, in UTC format.</td>
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
    <td><a href="#batch_get_agent_spaces"><CopyableCode code="batch_get_agent_spaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about one or more agent spaces.</td>
</tr>
<tr>
    <td><a href="#list_agent_spaces"><CopyableCode code="list_agent_spaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of agent space summaries in your account.</td>
</tr>
<tr>
    <td><a href="#create_agent_space"><CopyableCode code="create_agent_space" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new agent space. An agent space is a dedicated workspace for securing a specific application.</td>
</tr>
<tr>
    <td><a href="#update_agent_space"><CopyableCode code="update_agent_space" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentSpaceId"><code>agentSpaceId</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing agent space, including its name, description, AWS resources, target domains, and code review settings.</td>
</tr>
<tr>
    <td><a href="#delete_agent_space"><CopyableCode code="delete_agent_space" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an agent space and all of its associated resources, including pentests, findings, and artifacts.</td>
</tr>
<tr>
    <td><a href="#start_code_remediation"><CopyableCode code="start_code_remediation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentSpaceId"><code>agentSpaceId</code></a>, <a href="#parameter-findingIds"><code>findingIds</code></a></td>
    <td></td>
    <td>Initiates code remediation for one or more security findings. This creates pull requests in integrated repositories to fix the identified vulnerabilities.</td>
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
    defaultValue="batch_get_agent_spaces"
    values={[
        { label: 'batch_get_agent_spaces', value: 'batch_get_agent_spaces' },
        { label: 'list_agent_spaces', value: 'list_agent_spaces' }
    ]}
>
<TabItem value="batch_get_agent_spaces">

Retrieves information about one or more agent spaces.

```sql
SELECT
agent_spaces,
not_found
FROM aws.securityagent.agent_spaces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_agent_spaces">

Returns a paginated list of agent space summaries in your account.

```sql
SELECT
name,
agent_space_id,
created_at,
updated_at
FROM aws.securityagent.agent_spaces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_agent_space"
    values={[
        { label: 'create_agent_space', value: 'create_agent_space' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_agent_space">

Creates a new agent space. An agent space is a dedicated workspace for securing a specific application.

```sql
INSERT INTO aws.securityagent.agent_spaces (
name,
description,
awsResources,
targetDomainIds,
codeReviewSettings,
kmsKeyId,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ awsResources }}',
'{{ targetDomainIds }}',
'{{ codeReviewSettings }}',
'{{ kmsKeyId }}',
'{{ tags }}',
'{{ region }}'
RETURNING
name,
agent_space_id,
aws_resources,
code_review_settings,
created_at,
description,
kms_key_id,
target_domain_ids,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agent_spaces
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the agent_spaces resource.
    - name: name
      value: "{{ name }}"
      description: |
        Name of an agent space.
    - name: description
      value: "{{ description }}"
    - name: awsResources
      description: |
        The AWS resources associated with an agent space, including VPCs, log groups, S3 buckets, secrets, Lambda functions, and IAM roles.
      value:
        vpcs:
          - vpcArn: "{{ vpcArn }}"
            securityGroupArns: "{{ securityGroupArns }}"
            subnetArns: "{{ subnetArns }}"
        logGroups:
          - "{{ logGroups }}"
        s3Buckets:
          - "{{ s3Buckets }}"
        secretArns:
          - "{{ secretArns }}"
        lambdaFunctionArns:
          - "{{ lambdaFunctionArns }}"
        iamRoles:
          - "{{ iamRoles }}"
    - name: targetDomainIds
      value:
        - "{{ targetDomainIds }}"
      description: |
        List of target domain IDs.
    - name: codeReviewSettings
      description: |
        The code review settings for an agent space, controlling which types of scanning are enabled.
      value:
        controlsScanning: {{ controlsScanning }}
        generalPurposeScanning: {{ generalPurposeScanning }}
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        Identifier of a KMS key. Can be a key ID, key ARN, alias name, or alias ARN.
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tags for a resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_agent_space"
    values={[
        { label: 'update_agent_space', value: 'update_agent_space' }
    ]}
>
<TabItem value="update_agent_space">

Updates the configuration of an existing agent space, including its name, description, AWS resources, target domains, and code review settings.

```sql
UPDATE aws.securityagent.agent_spaces
SET 
agentSpaceId = '{{ agentSpaceId }}',
name = '{{ name }}',
description = '{{ description }}',
awsResources = '{{ awsResources }}',
targetDomainIds = '{{ targetDomainIds }}',
codeReviewSettings = '{{ codeReviewSettings }}'
WHERE 
region = '{{ region }}' --required
AND agentSpaceId = '{{ agentSpaceId }}' --required
RETURNING
name,
agent_space_id,
aws_resources,
code_review_settings,
created_at,
description,
target_domain_ids,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_agent_space"
    values={[
        { label: 'delete_agent_space', value: 'delete_agent_space' }
    ]}
>
<TabItem value="delete_agent_space">

Deletes an agent space and all of its associated resources, including pentests, findings, and artifacts.

```sql
DELETE FROM aws.securityagent.agent_spaces
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_code_remediation"
    values={[
        { label: 'start_code_remediation', value: 'start_code_remediation' }
    ]}
>
<TabItem value="start_code_remediation">

Initiates code remediation for one or more security findings. This creates pull requests in integrated repositories to fix the identified vulnerabilities.

```sql
EXEC aws.securityagent.agent_spaces.start_code_remediation 
@region='{{ region }}' --required 
@@json=
'{
"agentSpaceId": "{{ agentSpaceId }}", 
"pentestJobId": "{{ pentestJobId }}", 
"codeReviewJobId": "{{ codeReviewJobId }}", 
"findingIds": "{{ findingIds }}"
}'
;
```
</TabItem>
</Tabs>
