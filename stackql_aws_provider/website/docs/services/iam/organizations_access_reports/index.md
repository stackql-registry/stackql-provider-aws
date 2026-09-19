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
    <td><CopyableCode code="access_details" /></td>
    <td><code>string</code></td>
    <td>An object that contains details about the most recent attempt to access the service.</td>
</tr>
<tr>
    <td><CopyableCode code="error_details" /></td>
    <td><code>string</code></td>
    <td>Contains information about the reason that the operation failed. This data type is used as a response element in the GetOrganizationsAccessReport, GetServiceLastAccessedDetails, and GetServiceLastAccessedDetailsWithEntities operations.</td>
</tr>
<tr>
    <td><CopyableCode code="is_truncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items. Note that IAM might return fewer than the MaxItems number of results even when there are more results available. We recommend that you check IsTruncated after every call to ensure that you receive all your results.</td>
</tr>
<tr>
    <td><CopyableCode code="job_completion_date" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the generated report job was completed or failed. This field is null if the job is still in progress, as indicated by a job status value of IN_PROGRESS.</td>
</tr>
<tr>
    <td><CopyableCode code="job_creation_date" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the report job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The status of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_services_accessible" /></td>
    <td><code>integer</code></td>
    <td>The number of services that the applicable SCPs allow account principals to access.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_services_not_accessed" /></td>
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
<tr>
    <td><a href="#generate_organizations_access_report"><CopyableCode code="generate_organizations_access_report" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-EntityPath"><code>EntityPath</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OrganizationsPolicyId"><code>OrganizationsPolicyId</code></a></td>
    <td>Generates a report for service last accessed data for Organizations. You can generate a report for any entities (organization root, organizational unit, or account) or policies in your organization. To call this operation, you must be signed in using your Organizations management account credentials. You can use your long-term IAM user or root user credentials, or temporary credentials from assuming an IAM role. SCPs must be enabled for your organization root. You must have the required IAM and Organizations permissions. For more information, see Refining permissions using service last accessed data in the IAM User Guide. You can generate a service last accessed data report for entities by specifying only the entity's path. This data includes a list of services that are allowed by any service control policies (SCPs) that apply to the entity. You can generate a service last accessed data report for a policy by specifying an entity's path and an optional Organizations policy ID. This data includes a list of services that are allowed by the specified SCP. For each service in both report types, the data includes the most recent account activity that the policy allows to account principals in the entity or the entity's children. For important information about the data, reporting period, permissions required, troubleshooting, and supported Regions see Reducing permissions using service last accessed data in the IAM User Guide. The data includes all attempts to access Amazon Web Services, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that an account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see Logging IAM events with CloudTrail in the IAM User Guide. This operation returns a JobId. Use this parameter in the GetOrganizationsAccessReport operation to check the status of the report generation. To check the status of this request, use the JobId parameter in the GetOrganizationsAccessReport operation and test the JobStatus response parameter. When the job is complete, you can retrieve the report. To generate a service last accessed data report for entities, specify an entity path without specifying the optional Organizations policy ID. The type of entity that you specify determines the data returned in the report. Root – When you specify the organizations root as the entity, the resulting report lists all of the services allowed by SCPs that are attached to your root. For each service, the report includes data for all accounts in your organization except the management account, because the management account is not limited by SCPs. OU – When you specify an organizational unit (OU) as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the OU and its parents. For each service, the report includes data for all accounts in the OU or its children. This data excludes the management account, because the management account is not limited by SCPs. management account – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. For each service, the report includes data for only the management account. Account – When you specify another account as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the account and its parents. For each service, the report includes data for only the specified account. To generate a service last accessed data report for policies, specify an entity path and the optional Organizations policy ID. The type of entity that you specify determines the data returned for each service. Root – When you specify the root entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in your organization to which the SCP applies. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to any entities in the organization, then the report will return a list of services with no data. OU – When you specify an OU entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in the OU or its children to which the SCP applies. This means that other accounts outside the OU that are affected by the SCP might not be included in the data. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to the OU or one of its children, the report will return a list of services with no data. management account – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. If you specify a policy ID in the CLI or API, the policy is ignored. For each service, the report includes data for only the management account. Account – When you specify another account entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for only the specified account. This means that other accounts in the organization that are affected by the SCP might not be included in the data. If the SCP is not attached to the account, the report will return a list of services with no data. Service last accessed data does not use other policy types when determining whether a principal could access a service. These other policy types include identity-based policies, resource-based policies, access control lists, IAM permissions boundaries, and STS assume role policies. It only applies SCP logic. For more about the evaluation of policy types, see Evaluating policies in the IAM User Guide. For more information about service last accessed data, see Reducing policy scope by viewing user activity in the IAM User Guide.</td>
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
<tr id="parameter-EntityPath">
    <td><CopyableCode code="EntityPath" /></td>
    <td><code>string</code></td>
    <td>The path of the Organizations entity (root, OU, or account). You can build an entity path using the known structure of your organization. For example, assume that your account ID is 123456789012 and its parent OU ID is ou-rge0-awsabcde. The organization root ID is r-f6g7h8i9j0example and your organization ID is o-a1b2c3d4e5. Your entity path is o-a1b2c3d4e5/r-f6g7h8i9j0example/ou-rge0-awsabcde/123456789012.</td>
</tr>
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
<tr id="parameter-OrganizationsPolicyId">
    <td><CopyableCode code="OrganizationsPolicyId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Organizations service control policy (SCP). This parameter is optional. This ID is used to generate information about when an account principal that is limited by the SCP attempted to access an Amazon Web Services service.</td>
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
access_details,
error_details,
is_truncated,
job_completion_date,
job_creation_date,
job_status,
marker,
number_of_services_accessible,
number_of_services_not_accessed
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


## Lifecycle Methods

<Tabs
    defaultValue="generate_organizations_access_report"
    values={[
        { label: 'generate_organizations_access_report', value: 'generate_organizations_access_report' }
    ]}
>
<TabItem value="generate_organizations_access_report">

Generates a report for service last accessed data for Organizations. You can generate a report for any entities (organization root, organizational unit, or account) or policies in your organization. To call this operation, you must be signed in using your Organizations management account credentials. You can use your long-term IAM user or root user credentials, or temporary credentials from assuming an IAM role. SCPs must be enabled for your organization root. You must have the required IAM and Organizations permissions. For more information, see Refining permissions using service last accessed data in the IAM User Guide. You can generate a service last accessed data report for entities by specifying only the entity's path. This data includes a list of services that are allowed by any service control policies (SCPs) that apply to the entity. You can generate a service last accessed data report for a policy by specifying an entity's path and an optional Organizations policy ID. This data includes a list of services that are allowed by the specified SCP. For each service in both report types, the data includes the most recent account activity that the policy allows to account principals in the entity or the entity's children. For important information about the data, reporting period, permissions required, troubleshooting, and supported Regions see Reducing permissions using service last accessed data in the IAM User Guide. The data includes all attempts to access Amazon Web Services, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that an account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see Logging IAM events with CloudTrail in the IAM User Guide. This operation returns a JobId. Use this parameter in the GetOrganizationsAccessReport operation to check the status of the report generation. To check the status of this request, use the JobId parameter in the GetOrganizationsAccessReport operation and test the JobStatus response parameter. When the job is complete, you can retrieve the report. To generate a service last accessed data report for entities, specify an entity path without specifying the optional Organizations policy ID. The type of entity that you specify determines the data returned in the report. Root – When you specify the organizations root as the entity, the resulting report lists all of the services allowed by SCPs that are attached to your root. For each service, the report includes data for all accounts in your organization except the management account, because the management account is not limited by SCPs. OU – When you specify an organizational unit (OU) as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the OU and its parents. For each service, the report includes data for all accounts in the OU or its children. This data excludes the management account, because the management account is not limited by SCPs. management account – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. For each service, the report includes data for only the management account. Account – When you specify another account as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the account and its parents. For each service, the report includes data for only the specified account. To generate a service last accessed data report for policies, specify an entity path and the optional Organizations policy ID. The type of entity that you specify determines the data returned for each service. Root – When you specify the root entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in your organization to which the SCP applies. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to any entities in the organization, then the report will return a list of services with no data. OU – When you specify an OU entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in the OU or its children to which the SCP applies. This means that other accounts outside the OU that are affected by the SCP might not be included in the data. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to the OU or one of its children, the report will return a list of services with no data. management account – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. If you specify a policy ID in the CLI or API, the policy is ignored. For each service, the report includes data for only the management account. Account – When you specify another account entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for only the specified account. This means that other accounts in the organization that are affected by the SCP might not be included in the data. If the SCP is not attached to the account, the report will return a list of services with no data. Service last accessed data does not use other policy types when determining whether a principal could access a service. These other policy types include identity-based policies, resource-based policies, access control lists, IAM permissions boundaries, and STS assume role policies. It only applies SCP logic. For more about the evaluation of policy types, see Evaluating policies in the IAM User Guide. For more information about service last accessed data, see Reducing policy scope by viewing user activity in the IAM User Guide.

```sql
EXEC aws.iam.organizations_access_reports.generate_organizations_access_report 
@EntityPath='{{ EntityPath }}' --required, 
@region='{{ region }}' --required, 
@OrganizationsPolicyId='{{ OrganizationsPolicyId }}'
;
```
</TabItem>
</Tabs>
