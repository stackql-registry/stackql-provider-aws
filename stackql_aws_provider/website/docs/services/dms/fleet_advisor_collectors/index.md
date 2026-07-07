--- 
title: fleet_advisor_collectors
hide_title: false
hide_table_of_contents: false
keywords:
  - fleet_advisor_collectors
  - dms
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

Creates, updates, deletes, gets or lists a <code>fleet_advisor_collectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fleet_advisor_collectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.fleet_advisor_collectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fleet_advisor_collectors"
    values={[
        { label: 'describe_fleet_advisor_collectors', value: 'describe_fleet_advisor_collectors' }
    ]}
>
<TabItem value="describe_fleet_advisor_collectors">

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
    <td><CopyableCode code="Collectors" /></td>
    <td><code>array</code></td>
    <td>Provides descriptions of the Fleet Advisor collectors, including the collectors' name and ID, and the latest inventory data.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.</td>
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
    <td><a href="#describe_fleet_advisor_collectors"><CopyableCode code="describe_fleet_advisor_collectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support. Returns a list of the Fleet Advisor collectors in your account.</td>
</tr>
<tr>
    <td><a href="#create_fleet_advisor_collector"><CopyableCode code="create_fleet_advisor_collector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CollectorName"><code>CollectorName</code></a>, <a href="#parameter-ServiceAccessRoleArn"><code>ServiceAccessRoleArn</code></a>, <a href="#parameter-S3BucketName"><code>S3BucketName</code></a></td>
    <td></td>
    <td>End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support. Creates a Fleet Advisor collector using the specified parameters.</td>
</tr>
<tr>
    <td><a href="#delete_fleet_advisor_collector"><CopyableCode code="delete_fleet_advisor_collector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support. Deletes the specified Fleet Advisor collector.</td>
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
    defaultValue="describe_fleet_advisor_collectors"
    values={[
        { label: 'describe_fleet_advisor_collectors', value: 'describe_fleet_advisor_collectors' }
    ]}
>
<TabItem value="describe_fleet_advisor_collectors">

End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support. Returns a list of the Fleet Advisor collectors in your account.

```sql
SELECT
Collectors,
NextToken
FROM aws.dms.fleet_advisor_collectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_fleet_advisor_collector"
    values={[
        { label: 'create_fleet_advisor_collector', value: 'create_fleet_advisor_collector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_fleet_advisor_collector">

End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support. Creates a Fleet Advisor collector using the specified parameters.

```sql
INSERT INTO aws.dms.fleet_advisor_collectors (
CollectorName,
Description,
ServiceAccessRoleArn,
S3BucketName,
region
)
SELECT 
'{{ CollectorName }}' /* required */,
'{{ Description }}',
'{{ ServiceAccessRoleArn }}' /* required */,
'{{ S3BucketName }}' /* required */,
'{{ region }}'
RETURNING
CollectorName,
CollectorReferencedId,
Description,
S3BucketName,
ServiceAccessRoleArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: fleet_advisor_collectors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the fleet_advisor_collectors resource.
    - name: CollectorName
      value: "{{ CollectorName }}"
      description: |
        The name of your Fleet Advisor collector (for example, sample-collector).
    - name: Description
      value: "{{ Description }}"
      description: |
        A summary description of your Fleet Advisor collector.
    - name: ServiceAccessRoleArn
      value: "{{ ServiceAccessRoleArn }}"
      description: |
        The IAM role that grants permissions to access the specified Amazon S3 bucket.
    - name: S3BucketName
      value: "{{ S3BucketName }}"
      description: |
        The Amazon S3 bucket that the Fleet Advisor collector uses to store inventory metadata.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_fleet_advisor_collector"
    values={[
        { label: 'delete_fleet_advisor_collector', value: 'delete_fleet_advisor_collector' }
    ]}
>
<TabItem value="delete_fleet_advisor_collector">

End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support. Deletes the specified Fleet Advisor collector.

```sql
DELETE FROM aws.dms.fleet_advisor_collectors
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
