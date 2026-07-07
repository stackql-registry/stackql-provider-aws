--- 
title: organizations_access_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - organizations_access_reports
  - iam
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

Creates, updates, deletes, gets or lists an <code>organizations_access_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organizations_access_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.organizations_access_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_organizations_access_report"
    values={[
        { label: 'get_organizations_access_report', value: 'get_organizations_access_report' }
    ]}
>
<TabItem value="get_organizations_access_report">

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
    <td><CopyableCode code="AccessDetails" /></td>
    <td><code>string</code></td>
    <td>An object that contains details about the most recent attempt to access the service.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorDetails" /></td>
    <td><code>string</code></td>
    <td>Contains information about the reason that the operation failed. This data type is used as a response element in the GetOrganizationsAccessReport, GetServiceLastAccessedDetails, and GetServiceLastAccessedDetailsWithEntities operations.</td>
</tr>
<tr>
    <td><CopyableCode code="IsTruncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all your results.</td>
</tr>
<tr>
    <td><CopyableCode code="JobCompletionDate" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the generated report job was completed or failed. This field is null if the job is still in progress, as indicated by a job status value of IN_PROGRESS.</td>
</tr>
<tr>
    <td><CopyableCode code="JobCreationDate" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the report job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="JobStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfServicesAccessible" /></td>
    <td><code>integer</code></td>
    <td>The number of services that the applicable SCPs allow account principals to access.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfServicesNotAccessed" /></td>
    <td><code>integer</code></td>
    <td>The number of services that account principals are allowed but did not attempt to access.</td>
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
    <td><a href="#get_organizations_access_report"><CopyableCode code="get_organizations_access_report" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-JobId"><code>JobId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxItems"><code>MaxItems</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-SortKey"><code>SortKey</code></a></td>
    <td>Retrieves the service last accessed data report for Organizations that was previously generated using the GenerateOrganizationsAccessReport operation. This operation retrieves the status of your report job and the report contents. Depending on the parameters that you passed when you generated the report, the data returned could include different information. For details, see GenerateOrganizationsAccessReport. To call this operation, you must be signed in to the management account in your organization. SCPs must be enabled for your organization root. You must have permissions to perform this operation. For more information, see Refining permissions using service last accessed data in the IAM User Guide. For each service that principals in an account (root user, IAM users, or IAM roles) could access using SCPs, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, it returns the reason that it failed. By default, the list is sorted by service namespace.</td>
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
<tr id="parameter-JobId">
    <td><CopyableCode code="JobId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the request generated by the GenerateOrganizationsAccessReport operation.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true, and Marker contains a value to include in the subsequent call that tells the service where to continue from.</td>
</tr>
<tr id="parameter-SortKey">
    <td><CopyableCode code="SortKey" /></td>
    <td><code>string</code></td>
    <td>The key that is used to sort the results. If you choose the namespace key, the results are returned in alphabetical order. If you choose the time key, the results are sorted numerically by the date and time.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_organizations_access_report"
    values={[
        { label: 'get_organizations_access_report', value: 'get_organizations_access_report' }
    ]}
>
<TabItem value="get_organizations_access_report">

Retrieves the service last accessed data report for Organizations that was previously generated using the GenerateOrganizationsAccessReport operation. This operation retrieves the status of your report job and the report contents. Depending on the parameters that you passed when you generated the report, the data returned could include different information. For details, see GenerateOrganizationsAccessReport. To call this operation, you must be signed in to the management account in your organization. SCPs must be enabled for your organization root. You must have permissions to perform this operation. For more information, see Refining permissions using service last accessed data in the IAM User Guide. For each service that principals in an account (root user, IAM users, or IAM roles) could access using SCPs, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, it returns the reason that it failed. By default, the list is sorted by service namespace.

```sql
SELECT
AccessDetails,
ErrorDetails,
IsTruncated,
JobCompletionDate,
JobCreationDate,
JobStatus,
Marker,
NumberOfServicesAccessible,
NumberOfServicesNotAccessed
FROM aws.iam.organizations_access_reports
WHERE JobId = '{{ JobId }}' -- required
AND region = '{{ region }}' -- required
AND MaxItems = '{{ MaxItems }}'
AND Marker = '{{ Marker }}'
AND SortKey = '{{ SortKey }}'
;
```
</TabItem>
</Tabs>
