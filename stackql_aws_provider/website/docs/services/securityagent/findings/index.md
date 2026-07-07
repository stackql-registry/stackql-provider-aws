--- 
title: findings
hide_title: false
hide_table_of_contents: false
keywords:
  - findings
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

Creates, updates, deletes, gets or lists a <code>findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_findings"
    values={[
        { label: 'batch_get_findings', value: 'batch_get_findings' },
        { label: 'list_findings', value: 'list_findings' }
    ]}
>
<TabItem value="batch_get_findings">

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
    <td><CopyableCode code="findings" /></td>
    <td><code>array</code></td>
    <td>The list of findings that were found.</td>
</tr>
<tr>
    <td><CopyableCode code="notFound" /></td>
    <td><code>array</code></td>
    <td>The list of finding identifiers that were not found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_findings">

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
    <td>The name of the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="agentSpaceId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agent space associated with the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="codeReviewId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the code review associated with the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="codeReviewJobId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the code review job that produced the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="confidence" /></td>
    <td><code>string</code></td>
    <td>Finding confidence level. (FALSE_POSITIVE, UNCONFIRMED, LOW, MEDIUM, HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the finding was created, in UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="findingId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="pentestId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the pentest associated with the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="pentestJobId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the pentest job that produced the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="riskLevel" /></td>
    <td><code>string</code></td>
    <td>Risk severity level. (UNKNOWN, INFORMATIONAL, LOW, MEDIUM, HIGH, CRITICAL)</td>
</tr>
<tr>
    <td><CopyableCode code="riskType" /></td>
    <td><code>string</code></td>
    <td>The type of security risk identified by the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Finding status. (ACTIVE, RESOLVED, ACCEPTED, FALSE_POSITIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the finding was last updated, in UTC format.</td>
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
    <td><a href="#batch_get_findings"><CopyableCode code="batch_get_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about one or more security findings in an agent space.</td>
</tr>
<tr>
    <td><a href="#list_findings"><CopyableCode code="list_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the security findings for a pentest job.</td>
</tr>
<tr>
    <td><a href="#update_finding"><CopyableCode code="update_finding" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-findingId"><code>findingId</code></a>, <a href="#parameter-agentSpaceId"><code>agentSpaceId</code></a></td>
    <td></td>
    <td>Updates the status or risk level of a security finding.</td>
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
    defaultValue="batch_get_findings"
    values={[
        { label: 'batch_get_findings', value: 'batch_get_findings' },
        { label: 'list_findings', value: 'list_findings' }
    ]}
>
<TabItem value="batch_get_findings">

Retrieves information about one or more security findings in an agent space.

```sql
SELECT
findings,
notFound
FROM aws.securityagent.findings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_findings">

Lists the security findings for a pentest job.

```sql
SELECT
name,
agentSpaceId,
codeReviewId,
codeReviewJobId,
confidence,
createdAt,
findingId,
pentestId,
pentestJobId,
riskLevel,
riskType,
status,
updatedAt
FROM aws.securityagent.findings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_finding"
    values={[
        { label: 'update_finding', value: 'update_finding' }
    ]}
>
<TabItem value="update_finding">

Updates the status or risk level of a security finding.

```sql
UPDATE aws.securityagent.findings
SET 
findingId = '{{ findingId }}',
agentSpaceId = '{{ agentSpaceId }}',
riskLevel = '{{ riskLevel }}',
status = '{{ status }}'
WHERE 
region = '{{ region }}' --required
AND findingId = '{{ findingId }}' --required
AND agentSpaceId = '{{ agentSpaceId }}' --required;
```
</TabItem>
</Tabs>
