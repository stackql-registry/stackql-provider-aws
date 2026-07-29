--- 
title: related_resources_for_audit_findings
hide_title: false
hide_table_of_contents: false
keywords:
  - related_resources_for_audit_findings
  - iot
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

Creates, updates, deletes, gets or lists a <code>related_resources_for_audit_findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="related_resources_for_audit_findings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.related_resources_for_audit_findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_related_resources_for_audit_finding"
    values={[
        { label: 'list_related_resources_for_audit_finding', value: 'list_related_resources_for_audit_finding' }
    ]}
>
<TabItem value="list_related_resources_for_audit_finding">

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
    <td><CopyableCode code="additional_info" /></td>
    <td><code>object</code></td>
    <td>Other information about the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>object</code></td>
    <td>Information that identifies the noncompliant resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource. (DEVICE_CERTIFICATE, CA_CERTIFICATE, IOT_POLICY, COGNITO_IDENTITY_POOL, CLIENT_ID, ACCOUNT_SETTINGS, ROLE_ALIAS, IAM_ROLE, ISSUER_CERTIFICATE)</td>
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
    <td><a href="#list_related_resources_for_audit_finding"><CopyableCode code="list_related_resources_for_audit_finding" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-findingId"><code>findingId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>The related resources of an Audit finding. The following resources can be returned from calling this API: DEVICE_CERTIFICATE CA_CERTIFICATE IOT_POLICY COGNITO_IDENTITY_POOL CLIENT_ID ACCOUNT_SETTINGS ROLE_ALIAS IAM_ROLE ISSUER_CERTIFICATE This API is similar to DescribeAuditFinding's RelatedResources but provides pagination and is not limited to 10 resources. When calling DescribeAuditFinding for the intermediate CA revoked for active device certificates check, RelatedResources will not be populated. You must use this API, ListRelatedResourcesForAuditFinding, to list the certificates.</td>
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
<tr id="parameter-findingId">
    <td><CopyableCode code="findingId" /></td>
    <td><code>string</code></td>
    <td>The finding Id.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be used to retrieve the next set of results, or null if there are no additional results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_related_resources_for_audit_finding"
    values={[
        { label: 'list_related_resources_for_audit_finding', value: 'list_related_resources_for_audit_finding' }
    ]}
>
<TabItem value="list_related_resources_for_audit_finding">

The related resources of an Audit finding. The following resources can be returned from calling this API: DEVICE_CERTIFICATE CA_CERTIFICATE IOT_POLICY COGNITO_IDENTITY_POOL CLIENT_ID ACCOUNT_SETTINGS ROLE_ALIAS IAM_ROLE ISSUER_CERTIFICATE This API is similar to DescribeAuditFinding's RelatedResources but provides pagination and is not limited to 10 resources. When calling DescribeAuditFinding for the intermediate CA revoked for active device certificates check, RelatedResources will not be populated. You must use this API, ListRelatedResourcesForAuditFinding, to list the certificates.

```sql
SELECT
additional_info,
resource_identifier,
resource_type
FROM aws.iot.related_resources_for_audit_findings
WHERE findingId = '{{ findingId }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
