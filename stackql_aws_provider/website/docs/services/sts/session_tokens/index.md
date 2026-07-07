--- 
title: session_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - session_tokens
  - sts
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

Creates, updates, deletes, gets or lists a <code>session_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="session_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sts.session_tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_session_token"
    values={[
        { label: 'get_session_token', value: 'get_session_token' }
    ]}
>
<TabItem value="get_session_token">

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
    <td><CopyableCode code="AccessKeyId" /></td>
    <td><code>string</code></td>
    <td>The access key ID that identifies the temporary security credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="Expiration" /></td>
    <td><code>string</code></td>
    <td>The date on which the current credentials expire.</td>
</tr>
<tr>
    <td><CopyableCode code="SecretAccessKey" /></td>
    <td><code>string</code></td>
    <td>The secret access key that can be used to sign requests.</td>
</tr>
<tr>
    <td><CopyableCode code="SessionToken" /></td>
    <td><code>string</code></td>
    <td>The token that users must pass to the service API to use the temporary credentials.</td>
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
    <td><a href="#get_session_token"><CopyableCode code="get_session_token" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DurationSeconds"><code>DurationSeconds</code></a>, <a href="#parameter-SerialNumber"><code>SerialNumber</code></a>, <a href="#parameter-TokenCode"><code>TokenCode</code></a></td>
    <td>Returns a set of temporary credentials for an Amazon Web Services account or IAM user. The credentials consist of an access key ID, a secret access key, and a security token. Typically, you use GetSessionToken if you want to use MFA to protect programmatic calls to specific Amazon Web Services API operations like Amazon EC2 StopInstances. MFA-enabled IAM users must call GetSessionToken and submit an MFA code that is associated with their MFA device. Using the temporary security credentials that the call returns, IAM users can then make programmatic calls to API operations that require MFA authentication. An incorrect MFA code causes the API to return an access denied error. For a comparison of GetSessionToken with the other API operations that produce temporary credentials, see Requesting Temporary Security Credentials and Compare STS credentials in the IAM User Guide. No permissions are required for users to perform this operation. The purpose of the sts:GetSessionToken operation is to authenticate the user using MFA. You cannot use policies to control authentication operations. For more information, see Permissions for GetSessionToken in the IAM User Guide. Session Duration The GetSessionToken operation must be called by using the long-term Amazon Web Services security credentials of an IAM user. Credentials that are created by IAM users are valid for the duration that you specify. This duration can range from 900 seconds (15 minutes) up to a maximum of 129,600 seconds (36 hours), with a default of 43,200 seconds (12 hours). Credentials based on account credentials can range from 900 seconds (15 minutes) up to 3,600 seconds (1 hour), with a default of 1 hour. Permissions The temporary security credentials created by GetSessionToken can be used to make API calls to any Amazon Web Services service with the following exceptions: You cannot call any IAM API operations unless MFA authentication information is included in the request. You cannot call any STS API except AssumeRole or GetCallerIdentity. The credentials that GetSessionToken returns are based on permissions associated with the IAM user whose credentials were used to call the operation. The temporary credentials have the same permissions as the IAM user. Although it is possible to call GetSessionToken using the security credentials of an Amazon Web Services account root user rather than an IAM user, we do not recommend it. If GetSessionToken is called using root user credentials, the temporary credentials have root user permissions. For more information, see Safeguard your root user credentials and don't use them for everyday tasks in the IAM User Guide For more information about using GetSessionToken to create temporary credentials, see Temporary Credentials for Users in Untrusted Environments in the IAM User Guide.</td>
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
<tr id="parameter-DurationSeconds">
    <td><CopyableCode code="DurationSeconds" /></td>
    <td><code>integer</code></td>
    <td>The duration, in seconds, that the credentials should remain valid. Acceptable durations for IAM user sessions range from 900 seconds (15 minutes) to 129,600 seconds (36 hours), with 43,200 seconds (12 hours) as the default. Sessions for Amazon Web Services account owners are restricted to a maximum of 3,600 seconds (one hour). If the duration is longer than one hour, the session for Amazon Web Services account owners defaults to one hour.</td>
</tr>
<tr id="parameter-SerialNumber">
    <td><CopyableCode code="SerialNumber" /></td>
    <td><code>string</code></td>
    <td>The identification number of the MFA device that is associated with the IAM user who is making the GetSessionToken call. Specify this value if the IAM user has a policy that requires MFA authentication. The value is either the serial number for a hardware device (such as GAHT12345678) or an Amazon Resource Name (ARN) for a virtual device (such as arn:aws:iam::123456789012:mfa/user). You can find the device for an IAM user by going to the Amazon Web Services Management Console and viewing the user's security credentials. The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-</td>
</tr>
<tr id="parameter-TokenCode">
    <td><CopyableCode code="TokenCode" /></td>
    <td><code>string</code></td>
    <td>The value provided by the MFA device, if MFA is required. If any policy requires the IAM user to submit an MFA code, specify this value. If MFA authentication is required, the user must provide a code when requesting a set of temporary security credentials. A user who fails to provide the code receives an "access denied" response when requesting resources that require MFA authentication. The format for this parameter, as described by its regex pattern, is a sequence of six numeric digits.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_session_token"
    values={[
        { label: 'get_session_token', value: 'get_session_token' }
    ]}
>
<TabItem value="get_session_token">

Returns a set of temporary credentials for an Amazon Web Services account or IAM user. The credentials consist of an access key ID, a secret access key, and a security token. Typically, you use GetSessionToken if you want to use MFA to protect programmatic calls to specific Amazon Web Services API operations like Amazon EC2 StopInstances. MFA-enabled IAM users must call GetSessionToken and submit an MFA code that is associated with their MFA device. Using the temporary security credentials that the call returns, IAM users can then make programmatic calls to API operations that require MFA authentication. An incorrect MFA code causes the API to return an access denied error. For a comparison of GetSessionToken with the other API operations that produce temporary credentials, see Requesting Temporary Security Credentials and Compare STS credentials in the IAM User Guide. No permissions are required for users to perform this operation. The purpose of the sts:GetSessionToken operation is to authenticate the user using MFA. You cannot use policies to control authentication operations. For more information, see Permissions for GetSessionToken in the IAM User Guide. Session Duration The GetSessionToken operation must be called by using the long-term Amazon Web Services security credentials of an IAM user. Credentials that are created by IAM users are valid for the duration that you specify. This duration can range from 900 seconds (15 minutes) up to a maximum of 129,600 seconds (36 hours), with a default of 43,200 seconds (12 hours). Credentials based on account credentials can range from 900 seconds (15 minutes) up to 3,600 seconds (1 hour), with a default of 1 hour. Permissions The temporary security credentials created by GetSessionToken can be used to make API calls to any Amazon Web Services service with the following exceptions: You cannot call any IAM API operations unless MFA authentication information is included in the request. You cannot call any STS API except AssumeRole or GetCallerIdentity. The credentials that GetSessionToken returns are based on permissions associated with the IAM user whose credentials were used to call the operation. The temporary credentials have the same permissions as the IAM user. Although it is possible to call GetSessionToken using the security credentials of an Amazon Web Services account root user rather than an IAM user, we do not recommend it. If GetSessionToken is called using root user credentials, the temporary credentials have root user permissions. For more information, see Safeguard your root user credentials and don't use them for everyday tasks in the IAM User Guide For more information about using GetSessionToken to create temporary credentials, see Temporary Credentials for Users in Untrusted Environments in the IAM User Guide.

```sql
SELECT
AccessKeyId,
Expiration,
SecretAccessKey,
SessionToken
FROM aws.sts.session_tokens
WHERE region = '{{ region }}' -- required
AND DurationSeconds = '{{ DurationSeconds }}'
AND SerialNumber = '{{ SerialNumber }}'
AND TokenCode = '{{ TokenCode }}'
;
```
</TabItem>
</Tabs>
