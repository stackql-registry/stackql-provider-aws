--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
  - resiliencehubv2
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' },
        { label: 'list_policies', value: 'list_policies' }
    ]}
>
<TabItem value="get_policy">

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
    <td>Resource name (used in ARN — no spaces allowed). (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_\-&#93;&#123;1,59&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="associated_service_count" /></td>
    <td><code>integer</code></td>
    <td>The number of services associated with this policy.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_slo" /></td>
    <td><code>object</code></td>
    <td>Defines the availability service level objective (SLO) for a resilience policy.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_recovery" /></td>
    <td><code>object</code></td>
    <td>Defines data recovery targets for a resilience policy.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Resource description for services and policies.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>KMS key identifier — accepts key ID, key ARN, alias name, or alias ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_az" /></td>
    <td><code>object</code></td>
    <td>Defines the multi-AZ disaster recovery targets for a resilience policy.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_region" /></td>
    <td><code>object</code></td>
    <td>Defines the multi-Region disaster recovery targets for a resilience policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_policies">

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
    <td>Resource name (used in ARN — no spaces allowed). (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_\-&#93;&#123;1,59&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="associated_service_count" /></td>
    <td><code>integer</code></td>
    <td>The number of services associated with this policy.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_slo" /></td>
    <td><code>object</code></td>
    <td>Defines the availability service level objective (SLO) for a resilience policy.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_recovery" /></td>
    <td><code>object</code></td>
    <td>Defines data recovery targets for a resilience policy.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_az" /></td>
    <td><code>object</code></td>
    <td>Defines the multi-AZ disaster recovery targets for a resilience policy.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_region" /></td>
    <td><code>object</code></td>
    <td>Defines the multi-Region disaster recovery targets for a resilience policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy was last updated.</td>
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
    <td><a href="#get_policy"><CopyableCode code="get_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policyArn"><code>policyArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a resilience policy by ARN.</td>
</tr>
<tr>
    <td><a href="#list_policies"><CopyableCode code="list_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists resilience policies.</td>
</tr>
<tr>
    <td><a href="#create_policy"><CopyableCode code="create_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a resilience policy that defines availability and disaster recovery requirements.</td>
</tr>
<tr>
    <td><a href="#update_policy"><CopyableCode code="update_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyArn"><code>policyArn</code></a></td>
    <td></td>
    <td>Updates an existing resilience policy.</td>
</tr>
<tr>
    <td><a href="#delete_policy"><CopyableCode code="delete_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a resilience policy.</td>
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
<tr id="parameter-policyArn">
    <td><CopyableCode code="policyArn" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' },
        { label: 'list_policies', value: 'list_policies' }
    ]}
>
<TabItem value="get_policy">

Retrieves a resilience policy by ARN.

```sql
SELECT
name,
associated_service_count,
availability_slo,
created_at,
data_recovery,
description,
kms_key_id,
multi_az,
multi_region,
policy_arn,
tags,
updated_at
FROM aws.resiliencehubv2.policies
WHERE policyArn = '{{ policyArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_policies">

Lists resilience policies.

```sql
SELECT
name,
associated_service_count,
availability_slo,
created_at,
data_recovery,
multi_az,
multi_region,
policy_arn,
updated_at
FROM aws.resiliencehubv2.policies
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_policy"
    values={[
        { label: 'create_policy', value: 'create_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_policy">

Creates a resilience policy that defines availability and disaster recovery requirements.

```sql
INSERT INTO aws.resiliencehubv2.policies (
name,
description,
availabilitySlo,
multiAz,
multiRegion,
dataRecovery,
kmsKeyId,
tags,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ availabilitySlo }}',
'{{ multiAz }}',
'{{ multiRegion }}',
'{{ dataRecovery }}',
'{{ kmsKeyId }}',
'{{ tags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
policy
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the policies resource.
    - name: name
      value: "{{ name }}"
      description: |
        Resource name (used in ARN — no spaces allowed).
    - name: description
      value: "{{ description }}"
      description: |
        Resource description for services and policies.
    - name: availabilitySlo
      description: |
        Defines the availability service level objective (SLO) for a resilience policy.
      value:
        target: {{ target }}
    - name: multiAz
      description: |
        Defines the multi-AZ disaster recovery targets for a resilience policy.
      value:
        rtoInMinutes: {{ rtoInMinutes }}
        rpoInMinutes: {{ rpoInMinutes }}
        disasterRecoveryApproach: "{{ disasterRecoveryApproach }}"
    - name: multiRegion
      description: |
        Defines the multi-Region disaster recovery targets for a resilience policy.
      value:
        rtoInMinutes: {{ rtoInMinutes }}
        rpoInMinutes: {{ rpoInMinutes }}
        disasterRecoveryApproach: "{{ disasterRecoveryApproach }}"
    - name: dataRecovery
      description: |
        Defines data recovery targets for a resilience policy.
      value:
        timeBetweenBackupsInMinutes: {{ timeBetweenBackupsInMinutes }}
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        KMS key identifier — accepts key ID, key ARN, alias name, or alias ARN.
    - name: tags
      value: "{{ tags }}"
      description: |
        Resource tags.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Idempotency token.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_policy"
    values={[
        { label: 'update_policy', value: 'update_policy' }
    ]}
>
<TabItem value="update_policy">

Updates an existing resilience policy.

```sql
UPDATE aws.resiliencehubv2.policies
SET 
policyArn = '{{ policyArn }}',
description = '{{ description }}',
availabilitySlo = '{{ availabilitySlo }}',
multiAz = '{{ multiAz }}',
multiRegion = '{{ multiRegion }}',
dataRecovery = '{{ dataRecovery }}'
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
    defaultValue="delete_policy"
    values={[
        { label: 'delete_policy', value: 'delete_policy' }
    ]}
>
<TabItem value="delete_policy">

Deletes a resilience policy.

```sql
DELETE FROM aws.resiliencehubv2.policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
