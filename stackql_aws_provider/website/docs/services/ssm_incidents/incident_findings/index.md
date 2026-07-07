--- 
title: incident_findings
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_findings
  - ssm_incidents
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

Creates, updates, deletes, gets or lists an <code>incident_findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_findings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_incidents.incident_findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_incident_findings"
    values={[
        { label: 'batch_get_incident_findings', value: 'batch_get_incident_findings' },
        { label: 'list_incident_findings', value: 'list_incident_findings' }
    ]}
>
<TabItem value="batch_get_incident_findings">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>A list of errors encountered during the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="findings" /></td>
    <td><code>array</code></td>
    <td>Information about the requested findings.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_incident_findings">

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
    <td>The ID of the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the finding was last updated.</td>
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
    <td><a href="#batch_get_incident_findings"><CopyableCode code="batch_get_incident_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about all specified findings for an incident, including descriptive details about each finding. A finding represents a recent application environment change made by an CodeDeploy deployment or an CloudFormation stack creation or update that can be investigated as a potential cause of the incident.</td>
</tr>
<tr>
    <td><a href="#list_incident_findings"><CopyableCode code="list_incident_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of the IDs of findings, plus their last modified times, that have been identified for a specified incident. A finding represents a recent application environment change made by an CloudFormation stack creation or update or an CodeDeploy deployment that can be investigated as a potential cause of the incident.</td>
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
    defaultValue="batch_get_incident_findings"
    values={[
        { label: 'batch_get_incident_findings', value: 'batch_get_incident_findings' },
        { label: 'list_incident_findings', value: 'list_incident_findings' }
    ]}
>
<TabItem value="batch_get_incident_findings">

Retrieves details about all specified findings for an incident, including descriptive details about each finding. A finding represents a recent application environment change made by an CodeDeploy deployment or an CloudFormation stack creation or update that can be investigated as a potential cause of the incident.

```sql
SELECT
errors,
findings
FROM aws.ssm_incidents.incident_findings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_incident_findings">

Retrieves a list of the IDs of findings, plus their last modified times, that have been identified for a specified incident. A finding represents a recent application environment change made by an CloudFormation stack creation or update or an CodeDeploy deployment that can be investigated as a potential cause of the incident.

```sql
SELECT
id,
lastModifiedTime
FROM aws.ssm_incidents.incident_findings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
