--- 
title: threats
hide_title: false
hide_table_of_contents: false
keywords:
  - threats
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

Creates, updates, deletes, gets or lists a <code>threats</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="threats" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.threats" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_threats"
    values={[
        { label: 'batch_get_threats', value: 'batch_get_threats' },
        { label: 'list_threats', value: 'list_threats' }
    ]}
>
<TabItem value="batch_get_threats">

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
    <td><CopyableCode code="not_found" /></td>
    <td><code>array</code></td>
    <td>List of threat IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="threats" /></td>
    <td><code>array</code></td>
    <td>The list of threats that were found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_threats">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the threat was created, in UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Who created this threat. (CUSTOMER, AGENT)</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>Severity level for a threat. (CRITICAL, HIGH, MEDIUM, LOW, INFO)</td>
</tr>
<tr>
    <td><CopyableCode code="statement" /></td>
    <td><code>string</code></td>
    <td>The natural-language threat statement.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the threat. (OPEN, RESOLVED, DISMISSED)</td>
</tr>
<tr>
    <td><CopyableCode code="stride" /></td>
    <td><code>array</code></td>
    <td>List of STRIDE categories.</td>
</tr>
<tr>
    <td><CopyableCode code="threat_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the threat.</td>
</tr>
<tr>
    <td><CopyableCode code="threat_job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the threat model job that produced the threat.</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>A short title summarizing the threat.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the threat was last updated, in UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>Who last updated this threat. (CUSTOMER, AGENT)</td>
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
    <td><a href="#batch_get_threats"><CopyableCode code="batch_get_threats" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about one or more threats.</td>
</tr>
<tr>
    <td><a href="#list_threats"><CopyableCode code="list_threats" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of threats for a threat model job.</td>
</tr>
<tr>
    <td><a href="#create_threat"><CopyableCode code="create_threat" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentSpaceId"><code>agentSpaceId</code></a>, <a href="#parameter-threatJobId"><code>threatJobId</code></a></td>
    <td></td>
    <td>Creates a new threat under a threat model job.</td>
</tr>
<tr>
    <td><a href="#update_threat"><CopyableCode code="update_threat" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-threatId"><code>threatId</code></a>, <a href="#parameter-agentSpaceId"><code>agentSpaceId</code></a></td>
    <td></td>
    <td>Updates a threat.</td>
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
    defaultValue="batch_get_threats"
    values={[
        { label: 'batch_get_threats', value: 'batch_get_threats' },
        { label: 'list_threats', value: 'list_threats' }
    ]}
>
<TabItem value="batch_get_threats">

Retrieves information about one or more threats.

```sql
SELECT
not_found,
threats
FROM aws.securityagent.threats
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_threats">

Returns a paginated list of threats for a threat model job.

```sql
SELECT
created_at,
created_by,
severity,
statement,
status,
stride,
threat_id,
threat_job_id,
title_,
updated_at,
updated_by
FROM aws.securityagent.threats
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_threat"
    values={[
        { label: 'create_threat', value: 'create_threat' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_threat">

Creates a new threat under a threat model job.

```sql
INSERT INTO aws.securityagent.threats (
agentSpaceId,
threatJobId,
title,
statement,
severity,
comments,
stride,
threatSource,
prerequisites,
threatAction,
threatImpact,
impactedGoal,
impactedAssets,
anchor,
evidence,
recommendation,
region
)
SELECT 
'{{ agentSpaceId }}' /* required */,
'{{ threatJobId }}' /* required */,
'{{ title }}',
'{{ statement }}',
'{{ severity }}',
'{{ comments }}',
'{{ stride }}',
'{{ threatSource }}',
'{{ prerequisites }}',
'{{ threatAction }}',
'{{ threatImpact }}',
'{{ impactedGoal }}',
'{{ impactedAssets }}',
'{{ anchor }}',
'{{ evidence }}',
'{{ recommendation }}',
'{{ region }}'
RETURNING
anchor,
comments,
created_at,
created_by,
evidence,
impacted_assets,
impacted_goal,
prerequisites,
recommendation,
severity,
statement,
status,
stride,
threat_action,
threat_id,
threat_impact,
threat_job_id,
threat_source,
title_,
updated_at,
updated_by
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: threats
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the threats resource.
    - name: agentSpaceId
      value: "{{ agentSpaceId }}"
    - name: threatJobId
      value: "{{ threatJobId }}"
    - name: title
      value: "{{ title }}"
    - name: statement
      value: "{{ statement }}"
    - name: severity
      value: "{{ severity }}"
      description: |
        Severity level for a threat.
      valid_values: ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW', 'INFO']
    - name: comments
      value: "{{ comments }}"
    - name: stride
      value:
        - "{{ stride }}"
      description: |
        List of STRIDE categories.
    - name: threatSource
      value: "{{ threatSource }}"
    - name: prerequisites
      value: "{{ prerequisites }}"
    - name: threatAction
      value: "{{ threatAction }}"
    - name: threatImpact
      value: "{{ threatImpact }}"
    - name: impactedGoal
      value:
        - "{{ impactedGoal }}"
    - name: impactedAssets
      value:
        - "{{ impactedAssets }}"
    - name: anchor
      description: |
        DFD element that a threat is anchored to.
      value:
        kind: "{{ kind }}"
        id: "{{ id }}"
        packageId: "{{ packageId }}"
    - name: evidence
      description: |
        List of threat evidence.
      value:
        - packageId: "{{ packageId }}"
          path: "{{ path }}"
    - name: recommendation
      value: "{{ recommendation }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_threat"
    values={[
        { label: 'update_threat', value: 'update_threat' }
    ]}
>
<TabItem value="update_threat">

Updates a threat.

```sql
UPDATE aws.securityagent.threats
SET 
threatId = '{{ threatId }}',
agentSpaceId = '{{ agentSpaceId }}',
title = '{{ title }}',
status = '{{ status }}',
comments = '{{ comments }}',
statement = '{{ statement }}',
severity = '{{ severity }}',
threatSource = '{{ threatSource }}',
prerequisites = '{{ prerequisites }}',
threatAction = '{{ threatAction }}',
threatImpact = '{{ threatImpact }}',
impactedGoal = '{{ impactedGoal }}',
impactedAssets = '{{ impactedAssets }}',
anchor = '{{ anchor }}',
evidence = '{{ evidence }}',
recommendation = '{{ recommendation }}'
WHERE 
region = '{{ region }}' --required
AND threatId = '{{ threatId }}' --required
AND agentSpaceId = '{{ agentSpaceId }}' --required
RETURNING
anchor,
comments,
created_at,
created_by,
evidence,
impacted_assets,
impacted_goal,
prerequisites,
recommendation,
severity,
statement,
status,
stride,
threat_action,
threat_id,
threat_impact,
threat_job_id,
threat_source,
title_,
updated_at,
updated_by;
```
</TabItem>
</Tabs>
