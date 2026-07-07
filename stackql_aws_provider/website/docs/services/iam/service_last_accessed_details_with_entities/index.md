--- 
title: service_last_accessed_details_with_entities
hide_title: false
hide_table_of_contents: false
keywords:
  - service_last_accessed_details_with_entities
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

Creates, updates, deletes, gets or lists a <code>service_last_accessed_details_with_entities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_last_accessed_details_with_entities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.service_last_accessed_details_with_entities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_last_accessed_details_with_entities"
    values={[
        { label: 'get_service_last_accessed_details_with_entities', value: 'get_service_last_accessed_details_with_entities' }
    ]}
>
<TabItem value="get_service_last_accessed_details_with_entities">

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
    <td><CopyableCode code="EntityDetailsList" /></td>
    <td><code>string</code></td>
    <td>An EntityDetailsList object that contains details about when an IAM entity (user or role) used group or policy permissions in an attempt to access the specified Amazon Web Services service.</td>
</tr>
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
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.</td>
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
    <td><a href="#get_service_last_accessed_details_with_entities"><CopyableCode code="get_service_last_accessed_details_with_entities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-JobId"><code>JobId</code></a>, <a href="#parameter-ServiceNamespace"><code>ServiceNamespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxItems"><code>MaxItems</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>After you generate a group or policy report using the GenerateServiceLastAccessedDetails operation, you can use the JobId parameter in GetServiceLastAccessedDetailsWithEntities. This operation retrieves the status of your report job and a list of entities that could have used group or policy permissions to access the specified service. Group – For a group report, this operation returns a list of users in the group that could have used the group’s policies in an attempt to access the service. Policy – For a policy report, this operation returns a list of entities (users or roles) that could have used the policy in an attempt to access the service. You can also use this operation for user or role reports to retrieve details about those entities. If the operation fails, the GetServiceLastAccessedDetailsWithEntities operation returns the reason that it failed. By default, the list of associated entities is sorted by date, with the most recent access listed first.</td>
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
    <td>The ID of the request generated by the GenerateServiceLastAccessedDetails operation.</td>
</tr>
<tr id="parameter-ServiceNamespace">
    <td><CopyableCode code="ServiceNamespace" /></td>
    <td><code>string</code></td>
    <td>The service namespace for an Amazon Web Services service. Provide the service namespace to learn when the IAM entity last attempted to access the specified service. To learn the service namespace for a service, see Actions, resources, and condition keys for Amazon Web Services services in the IAM User Guide. Choose the name of the service to view details for that service. In the first paragraph, find the service prefix. For example, (service prefix: a4b). For more information about service namespaces, see Amazon Web Services service namespaces in the Amazon Web Services General Reference.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_service_last_accessed_details_with_entities"
    values={[
        { label: 'get_service_last_accessed_details_with_entities', value: 'get_service_last_accessed_details_with_entities' }
    ]}
>
<TabItem value="get_service_last_accessed_details_with_entities">

After you generate a group or policy report using the GenerateServiceLastAccessedDetails operation, you can use the JobId parameter in GetServiceLastAccessedDetailsWithEntities. This operation retrieves the status of your report job and a list of entities that could have used group or policy permissions to access the specified service. Group – For a group report, this operation returns a list of users in the group that could have used the group’s policies in an attempt to access the service. Policy – For a policy report, this operation returns a list of entities (users or roles) that could have used the policy in an attempt to access the service. You can also use this operation for user or role reports to retrieve details about those entities. If the operation fails, the GetServiceLastAccessedDetailsWithEntities operation returns the reason that it failed. By default, the list of associated entities is sorted by date, with the most recent access listed first.

```sql
SELECT
EntityDetailsList,
Error,
IsTruncated,
JobCompletionDate,
JobCreationDate,
JobStatus,
Marker
FROM aws.iam.service_last_accessed_details_with_entities
WHERE JobId = '{{ JobId }}' -- required
AND ServiceNamespace = '{{ ServiceNamespace }}' -- required
AND region = '{{ region }}' -- required
AND MaxItems = '{{ MaxItems }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
