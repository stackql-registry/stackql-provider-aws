--- 
title: report_creations
hide_title: false
hide_table_of_contents: false
keywords:
  - report_creations
  - resourcegroupstaggingapi
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

Creates, updates, deletes, gets or lists a <code>report_creations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="report_creations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resourcegroupstaggingapi.report_creations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_report_creation"
    values={[
        { label: 'describe_report_creation', value: 'describe_report_creation' }
    ]}
>
<TabItem value="describe_report_creation">

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
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Details of the common errors that all operations return.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_location" /></td>
    <td><code>string</code></td>
    <td>The path to the Amazon S3 bucket where the report was stored on creation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Reports the status of the operation. The operation status can be one of the following: RUNNING - Report creation is in progress. SUCCEEDED - Report creation is complete. You can open the report from the Amazon S3 bucket that you specified when you ran StartReportCreation. FAILED - Report creation timed out or the Amazon S3 bucket is not accessible. NO REPORT - No report was generated in the last 90 days.</td>
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
    <td><a href="#describe_report_creation"><CopyableCode code="describe_report_creation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the status of the StartReportCreation operation. You can call this operation only from the organization's management account and from the us-east-1 Region.</td>
</tr>
<tr>
    <td><a href="#start_report_creation"><CopyableCode code="start_report_creation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-S3Bucket"><code>S3Bucket</code></a></td>
    <td></td>
    <td>Generates a report that lists all tagged resources in the accounts across your organization and tells whether each resource is compliant with the effective tag policy. Compliance data is refreshed daily. The report is generated asynchronously. The generated report is saved to the following location: s3:​//amzn-s3-demo-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv For more information about evaluating resource compliance with tag policies, including the required permissions, review Permissions for evaluating organization-wide compliance in the Tagging Amazon Web Services Resources and Tag Editor user guide. You can call this operation only from the organization's management account and from the us-east-1 Region. If the account associated with the identity used to call StartReportCreation is different from the account that owns the Amazon S3 bucket, there must be a bucket policy attached to the bucket to provide access. For more information, review Amazon S3 bucket policy for report storage in the Tagging Amazon Web Services Resources and Tag Editor user guide.</td>
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
    defaultValue="describe_report_creation"
    values={[
        { label: 'describe_report_creation', value: 'describe_report_creation' }
    ]}
>
<TabItem value="describe_report_creation">

Describes the status of the StartReportCreation operation. You can call this operation only from the organization's management account and from the us-east-1 Region.

```sql
SELECT
error_message,
s3_location,
status
FROM aws.resourcegroupstaggingapi.report_creations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_report_creation"
    values={[
        { label: 'start_report_creation', value: 'start_report_creation' }
    ]}
>
<TabItem value="start_report_creation">

Generates a report that lists all tagged resources in the accounts across your organization and tells whether each resource is compliant with the effective tag policy. Compliance data is refreshed daily. The report is generated asynchronously. The generated report is saved to the following location: s3://amzn-s3-demo-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv For more information about evaluating resource compliance with tag policies, including the required permissions, review Permissions for evaluating organization-wide compliance in the Tagging Amazon Web Services Resources and Tag Editor user guide. You can call this operation only from the organization's management account and from the us-east-1 Region. If the account associated with the identity used to call StartReportCreation is different from the account that owns the Amazon S3 bucket, there must be a bucket policy attached to the bucket to provide access. For more information, review Amazon S3 bucket policy for report storage in the Tagging Amazon Web Services Resources and Tag Editor user guide.

```sql
EXEC aws.resourcegroupstaggingapi.report_creations.start_report_creation 
@region='{{ region }}' --required 
@@json=
'{
"S3Bucket": "{{ S3Bucket }}"
}'
;
```
</TabItem>
</Tabs>
