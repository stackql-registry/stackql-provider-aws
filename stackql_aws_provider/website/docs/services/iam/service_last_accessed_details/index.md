--- 
title: service_last_accessed_details
hide_title: false
hide_table_of_contents: false
keywords:
  - service_last_accessed_details
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

Creates, updates, deletes, gets or lists a <code>service_last_accessed_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_last_accessed_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.service_last_accessed_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_last_accessed_details"
    values={[
        { label: 'get_service_last_accessed_details', value: 'get_service_last_accessed_details' }
    ]}
>
<TabItem value="get_service_last_accessed_details">

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
    <td><CopyableCode code="Error" /></td>
    <td><code>string</code></td>
    <td>An object that contains details about the reason the operation failed.</td>
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
    <td><CopyableCode code="JobType" /></td>
    <td><code>string</code></td>
    <td>The type of job. Service jobs return information about when each service was last accessed. Action jobs also include information about when tracked actions within the service were last accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.</td>
</tr>
<tr>
    <td><CopyableCode code="ServicesLastAccessed" /></td>
    <td><code>string</code></td>
    <td>A ServiceLastAccessed object that contains details about the most recent attempt to access the service.</td>
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
    <td><a href="#get_service_last_accessed_details"><CopyableCode code="get_service_last_accessed_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-JobId"><code>JobId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxItems"><code>MaxItems</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Retrieves a service last accessed report that was created using the GenerateServiceLastAccessedDetails operation. You can use the JobId parameter in GetServiceLastAccessedDetails to retrieve the status of your report job. When the report is complete, you can retrieve the generated report. The report includes a list of Amazon Web Services services that the resource (user, group, role, or managed policy) can access. Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see Evaluating policies in the IAM User Guide. For each service that the resource could access using permissions policies, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, the GetServiceLastAccessedDetails operation returns the reason that it failed. The GetServiceLastAccessedDetails operation returns a list of services. This list includes the number of entities that have attempted to access the service and the date and time of the last attempt. It also returns the ARN of the following entity, depending on the resource ARN that you used to generate the report: User – Returns the user ARN that you used to generate the report Group – Returns the ARN of the group member (user) that last attempted to access the service Role – Returns the role ARN that you used to generate the report Policy – Returns the ARN of the user or role that last used the policy to attempt to access the service By default, the list is sorted by service namespace. If you specified ACTION_LEVEL granularity when you generated the report, this operation returns service and action last accessed data. This includes the most recent access attempt for each tracked action within a service. Otherwise, this operation returns only service data. For more information about service and action last accessed data, see Reducing permissions using service last accessed data in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#generate_service_last_accessed_details"><CopyableCode code="generate_service_last_accessed_details" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Arn"><code>Arn</code></a>, <a href="#parameter-Granularity"><code>Granularity</code></a></td>
    <td>Generates a report that includes details about when an IAM resource (user, group, role, or policy) was last used in an attempt to access Amazon Web Services services. Recent activity usually appears within four hours. IAM reports activity for at least the last 400 days, or less if your Region began supporting this feature within the last year. For more information, see Regions where data is tracked. For more information about services and actions for which action last accessed information is displayed, see IAM action last accessed information services and actions. The service last accessed data includes all attempts to access an Amazon Web Services API, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that your account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see Logging IAM events with CloudTrail in the IAM User Guide. The GenerateServiceLastAccessedDetails operation returns a JobId. Use this parameter in the following operations to retrieve the following details from your report: GetServiceLastAccessedDetails – Use this operation for users, groups, roles, or policies to list every Amazon Web Services service that the resource could access using permissions policies. For each service, the response includes information about the most recent access attempt. The JobId returned by GenerateServiceLastAccessedDetail must be used by the same role within a session, or by the same user when used to call GetServiceLastAccessedDetail. GetServiceLastAccessedDetailsWithEntities – Use this operation for groups and policies to list information about the associated entities (users or roles) that attempted to access a specific Amazon Web Services service. To check the status of the GenerateServiceLastAccessedDetails request, use the JobId parameter in the same operations and test the JobStatus response parameter. For additional information about the permissions policies that allow an identity (user, group, or role) to access specific services, use the ListPoliciesGrantingServiceAccess operation. Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see Evaluating policies in the IAM User Guide. For more information about service and action last accessed data, see Reducing permissions using service last accessed data in the IAM User Guide.</td>
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
    <td>The ID of the request generated by the GenerateServiceLastAccessedDetails operation. The JobId returned by GenerateServiceLastAccessedDetail must be used by the same role within a session, or by the same user when used to call GetServiceLastAccessedDetail.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Arn">
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM resource (user, group, role, or managed policy) used to generate information about when the resource was last used in an attempt to access an Amazon Web Services service.</td>
</tr>
<tr id="parameter-Granularity">
    <td><CopyableCode code="Granularity" /></td>
    <td><code>string</code></td>
    <td>The level of detail that you want to generate. You can specify whether you want to generate information about the last attempt to access services or actions. If you specify service-level granularity, this operation generates only service data. If you specify action-level granularity, it generates service and action data. If you don't include this optional parameter, the operation generates service data.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_service_last_accessed_details"
    values={[
        { label: 'get_service_last_accessed_details', value: 'get_service_last_accessed_details' }
    ]}
>
<TabItem value="get_service_last_accessed_details">

Retrieves a service last accessed report that was created using the GenerateServiceLastAccessedDetails operation. You can use the JobId parameter in GetServiceLastAccessedDetails to retrieve the status of your report job. When the report is complete, you can retrieve the generated report. The report includes a list of Amazon Web Services services that the resource (user, group, role, or managed policy) can access. Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see Evaluating policies in the IAM User Guide. For each service that the resource could access using permissions policies, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, the GetServiceLastAccessedDetails operation returns the reason that it failed. The GetServiceLastAccessedDetails operation returns a list of services. This list includes the number of entities that have attempted to access the service and the date and time of the last attempt. It also returns the ARN of the following entity, depending on the resource ARN that you used to generate the report: User – Returns the user ARN that you used to generate the report Group – Returns the ARN of the group member (user) that last attempted to access the service Role – Returns the role ARN that you used to generate the report Policy – Returns the ARN of the user or role that last used the policy to attempt to access the service By default, the list is sorted by service namespace. If you specified ACTION_LEVEL granularity when you generated the report, this operation returns service and action last accessed data. This includes the most recent access attempt for each tracked action within a service. Otherwise, this operation returns only service data. For more information about service and action last accessed data, see Reducing permissions using service last accessed data in the IAM User Guide.

```sql
SELECT
Error,
IsTruncated,
JobCompletionDate,
JobCreationDate,
JobStatus,
JobType,
Marker,
ServicesLastAccessed
FROM aws.iam.service_last_accessed_details
WHERE JobId = '{{ JobId }}' -- required
AND region = '{{ region }}' -- required
AND MaxItems = '{{ MaxItems }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="generate_service_last_accessed_details"
    values={[
        { label: 'generate_service_last_accessed_details', value: 'generate_service_last_accessed_details' }
    ]}
>
<TabItem value="generate_service_last_accessed_details">

Generates a report that includes details about when an IAM resource (user, group, role, or policy) was last used in an attempt to access Amazon Web Services services. Recent activity usually appears within four hours. IAM reports activity for at least the last 400 days, or less if your Region began supporting this feature within the last year. For more information, see Regions where data is tracked. For more information about services and actions for which action last accessed information is displayed, see IAM action last accessed information services and actions. The service last accessed data includes all attempts to access an Amazon Web Services API, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that your account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see Logging IAM events with CloudTrail in the IAM User Guide. The GenerateServiceLastAccessedDetails operation returns a JobId. Use this parameter in the following operations to retrieve the following details from your report: GetServiceLastAccessedDetails – Use this operation for users, groups, roles, or policies to list every Amazon Web Services service that the resource could access using permissions policies. For each service, the response includes information about the most recent access attempt. The JobId returned by GenerateServiceLastAccessedDetail must be used by the same role within a session, or by the same user when used to call GetServiceLastAccessedDetail. GetServiceLastAccessedDetailsWithEntities – Use this operation for groups and policies to list information about the associated entities (users or roles) that attempted to access a specific Amazon Web Services service. To check the status of the GenerateServiceLastAccessedDetails request, use the JobId parameter in the same operations and test the JobStatus response parameter. For additional information about the permissions policies that allow an identity (user, group, or role) to access specific services, use the ListPoliciesGrantingServiceAccess operation. Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see Evaluating policies in the IAM User Guide. For more information about service and action last accessed data, see Reducing permissions using service last accessed data in the IAM User Guide.

```sql
EXEC aws.iam.service_last_accessed_details.generate_service_last_accessed_details 
@region='{{ region }}' --required, 
@Arn='{{ Arn }}', 
@Granularity='{{ Granularity }}'
;
```
</TabItem>
</Tabs>
