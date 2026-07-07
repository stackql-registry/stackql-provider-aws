--- 
title: findings
hide_title: false
hide_table_of_contents: false
keywords:
  - findings
  - codeguru_security
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeguru_security.findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_findings"
    values={[
        { label: 'batch_get_findings', value: 'batch_get_findings' },
        { label: 'get_findings', value: 'get_findings' }
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
    <td><CopyableCode code="failedFindings" /></td>
    <td><code>array</code></td>
    <td>A list of errors for individual findings which were not fetched. Each BatchGetFindingsError contains the scanName, findingId, errorCode and error message.</td>
</tr>
<tr>
    <td><CopyableCode code="findings" /></td>
    <td><code>array</code></td>
    <td>A list of all findings which were successfully fetched.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_findings">

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
    <td>The identifier for a finding.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the finding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="detectorId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the detector that detected the finding in your code. A detector is a defined rule based on industry standards and AWS best practices.</td>
</tr>
<tr>
    <td><CopyableCode code="detectorName" /></td>
    <td><code>string</code></td>
    <td>The name of the detector that identified the security vulnerability in your code.</td>
</tr>
<tr>
    <td><CopyableCode code="detectorTags" /></td>
    <td><code>array</code></td>
    <td>One or more tags or categorizations that are associated with a detector. These tags are defined by type, programming language, or other classification such as maintainability or consistency.</td>
</tr>
<tr>
    <td><CopyableCode code="generatorId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the component that generated a finding such as AmazonCodeGuruSecurity.</td>
</tr>
<tr>
    <td><CopyableCode code="remediation" /></td>
    <td><code>object</code></td>
    <td>An object that contains the details about how to remediate a finding.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>The resource where Amazon CodeGuru Security detected a finding.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the rule that generated the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the finding. Severity can be critical, high, medium, low, or informational. For information on severity levels, see Finding severity in the Amazon CodeGuru Security User Guide. (Critical, High, Medium, Low, Info)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the finding. A finding status can be open or closed. (Closed, Open, All)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of finding.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the finding was last updated. Findings are updated when you remediate them or when the finding code location changes.</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerability" /></td>
    <td><code>object</code></td>
    <td>An object that describes the detected security vulnerability.</td>
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
    <td>Returns a list of requested findings from standard scans.</td>
</tr>
<tr>
    <td><a href="#get_findings"><CopyableCode code="get_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scan_name"><code>scan_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Returns a list of all findings generated by a particular scan.</td>
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
<tr id="parameter-scan_name">
    <td><CopyableCode code="scan_name" /></td>
    <td><code>string</code></td>
    <td>The name of the scan you want to retrieve findings from.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. Use this parameter when paginating results. If additional results exist beyond the number you specify, the nextToken element is returned in the response. Use nextToken in a subsequent request to retrieve additional results. If not specified, returns 1000 results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request to continue listing results after the first page.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the findings you want to get. Pass either Open, Closed, or All.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_findings"
    values={[
        { label: 'batch_get_findings', value: 'batch_get_findings' },
        { label: 'get_findings', value: 'get_findings' }
    ]}
>
<TabItem value="batch_get_findings">

Returns a list of requested findings from standard scans.

```sql
SELECT
failedFindings,
findings
FROM aws.codeguru_security.findings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_findings">

Returns a list of all findings generated by a particular scan.

```sql
SELECT
id,
createdAt,
description,
detectorId,
detectorName,
detectorTags,
generatorId,
remediation,
resource,
ruleId,
severity,
status,
title_,
type_,
updatedAt,
vulnerability
FROM aws.codeguru_security.findings
WHERE scan_name = '{{ scan_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>
